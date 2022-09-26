<template>
  <div>
    <el-card v-if="allPerms.search">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="网关名称：">
          <el-input v-model="searchForm.routeName" placeholder="请输入网关名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch">查询</el-button>
          <el-button type="primary" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card" style="margin-top: 8px;">
      <!--  查询  -->

      <div style="padding-bottom: 5px;">
        <el-button v-if="allPerms.add" type="primary" icon="el-icon-plus" @click="handleAdd">新增</el-button>
      </div>
      <!--  表格  -->
      <div>
        <el-table
            :data="tableData"
            border
            stripe header-cell-class-name="my-head"
            style="width: 100%;">
          <el-table-column
              fixed
              type="index"
              label="序号"
              align="center"
              :index="indexMethod"
              width="60"
          >
          </el-table-column>
          <el-table-column
              prop="routeName"
              label="网关名称"
              align="center"
          >
          </el-table-column>
          <el-table-column
              prop="routeId"
              label="网关编码"
              align="center"
          >
          </el-table-column>
          <el-table-column
              prop="predicates"
              label="网关路径"
              align="center">
          </el-table-column>
          <el-table-column
              prop="uri"
              label="服务原地址"
              align="center"
          >
          </el-table-column>
          <el-table-column
              prop="isOpen"
              label="是否限流"
              align="center">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <el-tag v-if="scope.row.isOpen===0" size="medium" type="danger">否</el-tag>
                <el-tag v-else-if="scope.row.isOpen===1" size="medium" type="success">是</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column
              prop="delFlag"
              label="是否生效"
              align="center">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <el-tag v-if="scope.row.delFlag==='0'" size="medium" type="success">是</el-tag>
                <el-tag v-else-if="scope.row.delFlag==='1'" size="medium" type="danger">否</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              align="center"
              width="240">
            <template slot-scope="scope">
              <el-button v-if="allPerms.edit" @click="handleEdit(scope.row)" type="text" icon="el-icon-edit" size="small">编辑</el-button>
              <el-popconfirm v-if="allPerms.delete" style="padding-left: 8px;"
                             title="确定删除吗？"
                             @confirm="handleDelete(scope.row)"
              >
                <el-button slot="reference" type="text" size="small" icon="el-icon-delete">删除</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--  分页  -->
      <div style="float: right;padding-bottom: 20px;">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="page.currentPage"
            :page-size="page.pageSize"
            :page-sizes="[10, 20, 40, 60]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total">
        </el-pagination>
      </div>
      <RouteEdit :title="dialogTitle" v-model="dialogVisible" :form="formData" @close="close"></RouteEdit>
    </el-card>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import RouteEdit from './module/RouteEdit.vue';
import mixin from '@/mixins/mixin';
export default {
  name: 'dict',
  components: { RouteEdit },
  mixins:[mixin],
  data() {
    return {
      dialogTitle:null,
      dialogVisible:false,
      formData:{
        routeName:null,
        routeId:null,
        predicates:null,
        uri:null,
        delFlag:null
      }
    }
  },
  computed: {
    ...mapGetters(['allPerms'])
  },
  created() {
    this.getList()
  },
  methods: {
    //分页查询后得到的数据赋值
    getList(page) {
      let data = {
        'records': [
          {
            'id': 11062,
            'routeId': 'sipsd-upms-biz',
            'routeName': '通用权限模块',
            'predicates': '/admin/**',
            'filters': '[{"args":{"key-resolver":"#{@remoteAddrKeyResolver}","redis-rate-limiter.requestedTokens":"1","redis-rate-limiter.burstCapacity":"60","redis-rate-limiter.replenishRate":"60"},"name":"SipsdRequestRateLimiter"}]',
            'keyResolver': null,
            'isOpen': 0,
            'rateLimitString': null,
            'uri': 'lb://sipsd-upms-biz',
            'sort': 0,
            'createTime': 1646587618000,
            'updateTime': null,
            'delFlag': 0
          },
          {
            'id': 11063,
            'routeId': 'sipsd-auth-server',
            'routeName': '认证中心',
            'predicates': '/auth/**',
            'filters': '[]',
            'keyResolver': null,
            'isOpen': 0,
            'rateLimitString': null,
            'uri': 'lb://sipsd-auth-server',
            'sort': 0,
            'createTime': 1646587618000,
            'updateTime': null,
            'delFlag': 0
          }
        ],
        'total': 2,
        'size': 10,
        'current': 1,
        'orders': [],
        'optimizeCountSql': true,
        'hitCount': false,
        'searchCount': true,
        'pages': 1
      }
      this.tableData = data.records
      this.page.currentPage = data.current
      this.page.pageSize = data.size
      this.page.total  = data.total
    },
    handleAdd() {
      this.dialogTitle='新增'
      this.dialogVisible = true
    },
    handleEdit() {
      this.dialogTitle='编辑'
      this.dialogVisible = true
    },
    handleDelete(scope) {
      this.$message({
        showClose: true,
        message: '删除成功',
        type: 'success'
      });
      this.getList()
    },
    close() {
      this.getList()
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
.tabCol{
  text-align: center;
  margin-top: 10px;
}
</style>
