<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline" @keyup.enter.native="searchQuery">
        <a-row :gutter="24">
          <a-col :md="6" :sm="8">
            <a-form-item label="标题">
              <a-input placeholder="请输入标题" v-model="queryParam.title"></a-input>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <a-form-item label="方法">
              <a-select placeholder="请选择方法" v-model="queryParam.method">
                <a-select-option value="">全部</a-select-option>
                <a-select-option value="GET">GET</a-select-option>
                <a-select-option value="POST">POST</a-select-option>
                <a-select-option value="PUT">PUT</a-select-option>
                <a-select-option value="DELETE">DELETE</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="6" :sm="8">
            <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
              <a-button type="primary" @click="searchQuery" icon="search">查询</a-button>
              <a-button
                type="primary"
                @click="searchReset"
                icon="reload"
                style="margin-left: 8px"
              >重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <!-- 查询区域-END -->

    <!-- 操作按钮区域 -->
    <div class="table-operator">
      <a-button @click="handleAdd" type="primary" icon="plus">添加</a-button>
      <a-dropdown v-if="selectedRowKeys.length > 0">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="batchDel">
            <a-icon type="delete" />删除
          </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
          批量操作
          <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>
    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择
        <a style="font-weight: 600" v-text="selectedRowKeys.length"></a>项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>

      <a-table
        ref="table"
        size="middle"
        bordered
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{ fixed: true, selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        @change="handleTableChange"
      >
        <template slot="htmlSlot" slot-scope="text">
          <div v-html="text"></div>
        </template>
        <template slot="imgSlot" slot-scope="text">
          <span v-if="!text" style="font-size: 12px;font-style: italic;">无此图片</span>
          <img
            v-else
            :src="getImgView(text)"
            height="25px"
            alt="图片不存在"
            style="max-width:80px;font-size: 12px;font-style: italic;"
          />
        </template>
        <template slot="fileSlot" slot-scope="text">
          <span v-if="!text" style="font-size: 12px;font-style: italic;">无此文件</span>
          <a-button
            v-else
            :ghost="true"
            type="primary"
            icon="download"
            size="small"
            @click="uploadFile(text)"
          >下载</a-button>
        </template>
        <span slot="description" slot-scope="text">{{ text }}</span>

        <span slot="action" slot-scope="text, record">
          <a @click="handleEdit(record)">编辑</a>
          <a-divider type="vertical" />
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
            <a>删除</a>
          </a-popconfirm>
        </span>
      </a-table>
    </div>
    <TenantFileModal v-model="modelVisible" :formObj="formObj" @ok="modalFormOk"></TenantFileModal>
  </a-card>
</template>

<script>
import { JeecgListMixin } from '../../mixins/JeecgListMixin'
import TenantFileModal from './modules/TenantFileModal'
import moment from 'moment'
export default {
  name: 'TenantFileList',
  mixins: [JeecgListMixin],
  components: {
    TenantFileModal
  },
  data() {
    return {
      tokenHeader: {},
      description: '文件表管理页面',
      modelVisible: false,
      formObj: {},
      queryParam: {},
      // 表头
      columns: [
        {
          title: 'id',
          align: 'center',
          dataIndex: 'id'
        },
        {
          title: '标题',
          align: 'center',
          dataIndex: 'title'
        },
        {
          title: '类型',
          align: 'center',
          dataIndex: 'type'
        },
        {
          title: '方法',
          align: 'center',
          dataIndex: 'method'
        },
        {
          title: '远程地址',
          align: 'center',
          dataIndex: 'remoteAddr'
        },
        {
          title: '创建时间',
          align: 'center',
          dataIndex: 'createTime',
          customRender: function (text) {
            return new moment(text).toString()
          }
        },
        {
          title: '用户标识',
          align: 'left',
          width: 500,
          dataIndex: 'userAgent'
        },
        {
          title: '操作',
          dataIndex: 'action',
          align: 'center',
          scopedSlots: { customRender: 'action' }
        }
      ],
      url: {
        list: '/log/page',
        delete: '/log',
        save: '/log/save',
        deleteBatch: ''

      },
      dictOptions: {}
    }
  },
  computed: {
    minioUploadAction() {
      return new moment(text).format('YYYY-MM-DD hh:mm:ss')
    }
  },
  methods: {
    beforeUpload(file) {
      var fileType = file.type
      if (fileType === 'image') {
        if (fileType.indexOf('image') < 0) {
          this.$message.warning('请上传图片')
          return false
        }
      } else if (fileType === 'file') {
        if (fileType.indexOf('image') >= 0) {
          this.$message.warning('请上传文件')
          return false
        }
      }
      return true
    },
    handleAdd() {
      this.formObj = {}
      this.modelVisible = true
    },
    handleEdit(data) {
      this.formObj = Object.assign({}, data)
      this.modelVisible = true
    },
    handleChange(info) {
      if (info.file.status === 'done') {
        if (info.file.response.success) {
          this.loadData()
          this.$message.success(`${info.file.name} 上传成功!`)
        } else {
          this.$message.error(`${info.file.response.message} `)
        }
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.response.message} `)
      }
    }
    /**
     * 模拟方法，实际开发请删除
    loadData() {
        this.dataSource = [
            {
                'bucket': '0x025004',
                'fileName': 'doEvil',
                'path': '/baidu/doEvil',
                'url': 'http://www.baidu.com',
                'type': 'PNG',
                'size': '100KB',
                'createTime': '',
                'id': 1
            }
        ];
    },
    */
  }
}
</script>
<style scoped>
@import "../../assets/less/common.less";
</style>
