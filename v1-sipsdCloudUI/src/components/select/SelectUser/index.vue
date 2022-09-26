<template>
  <el-dialog
    title="选择用户"
    :visible.sync="visibleInChild"
    :append-to-body="appendToBody"
    width="80%"
    :before-close="close"
  >
    <div class="el-dialog-body-custom-height">
      <el-row :gutter="5" style="margin-bottom: 10px">
        <el-col :span="6">
          <div>
            <el-input
              v-model="filterText"
              placeholder="请输入过滤条件"
              size="mini"
            />
            <el-tree
              ref="_selectOrgTree"
              :data="treeData"
              node-key="id"
              :props="defaultProps"
              :filter-node-method="filterNode"
              class="filter-tree"
              @node-click="handleNodeClick"
            ></el-tree>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <div class="filter-container" style="margin-bottom: 10px">
              <el-input
                v-model="listQuery.userId"
                placeholder="用户ID"
                size="mini"
                style="width: 200px; margin-right: 8px"
                class="filter-item"
                @keyup.enter.native="btnQuery"
              ></el-input>
              <el-input
                v-model="listQuery.username"
                placeholder="用户姓名"
                size="mini"
                style="width: 200px; margin-right: 8px"
                class="filter-item"
                @keyup.enter.native="btnQuery"
              ></el-input>
              <el-dropdown
                split-button
                type="primary"
                size="mini"
                class="filter-item"
                style="margin-right: 8px"
                @click="btnQuery"
              >
                <i class="el-icon-search el-icon--left" />查询
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    icon="el-icon-zoom-out"
                    size="mini"
                    @click.native="btnReset"
                    >重置
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <el-table
              ref="_sysUserTable"
              :data="records"
              border
              fit
              highlight-current-row
              height="337"
              style="width: 100%"
              :cell-style="{ padding: '3px' }"
              @row-click="rowClick"
            >
              <!--<el-table-column v-if="multipleSelect" type="selection" align="center">
                            </el-table-column>-->
              <!-- <el-table-column label="用户ID" prop="userId" align="center">
                <template slot-scope="scope">
                  <span>{{ scope.row.userId }}</span>
                </template>
              </el-table-column> -->
              <el-table-column label="账号" prop="userName" align="center">
                <template slot-scope="scope">
                  <span>{{ scope.row.username }}</span>
                </template>
              </el-table-column>
              <el-table-column label="用户姓名" prop="realName" align="center">
                <template slot-scope="scope">
                  <span>{{ scope.row.realname }}</span>
                </template>
              </el-table-column>
            </el-table>
            <pagination
              v-show="total > 0"
              :total="total"
              :current.sync="listQuery.current"
              :size.sync="listQuery.size"
              @pagination="listSysUsers"
            />
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <div style="margin-bottom: 10px">
              <div class="selectUserBtn">
                <el-button
                  icon="el-icon-remove"
                  type="primary"
                  size="mini"
                  @click="btnRemoveAll"
                  >清空</el-button
                >
              </div>
              <p style="font-size: 18px; color: #303133; display: inline-block">
                已绑定用户
              </p>
            </div>
            <el-table
              :data="selectedRecords"
              border
              fit
              highlight-current-row
              height="337"
              style="width: 100%"
              :cell-style="{ padding: '3px' }"
            >
              <!-- <el-table-column label="用户ID" prop="userId" align="center">
                <template slot-scope="scope">
                  <span>{{ scope.row.userId }}</span>
                </template>
              </el-table-column> -->
              <el-table-column label="账号" prop="userName" align="center">
                <template slot-scope="scope">
                  <span>{{ scope.row.username }}</span>
                </template>
              </el-table-column>
              <el-table-column label="用户姓名" prop="realName" align="center">
                <template slot-scope="scope">
                  <span>{{ scope.row.realname }}</span>
                </template>
              </el-table-column>
              <el-table-column
                v-if="multipleSelect"
                label="操作"
                align="center"
              >
                <template slot-scope="{ row }">
                  <i
                    class="el-icon-delete el-icon--left"
                    style="cursor: pointer"
                    @click="btnRemove(row)"
                  ></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button
        icon="el-icon-close"
        size="mini"
        @click="visibleInChild = false"
        >取消</el-button
      >
      <el-button
        icon="el-icon-check"
        size="mini"
        type="primary"
        @click="confirm"
        >确定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { fetchTree } from '@/api/admin/dept'
import { fetchList, fetchListByDeptId } from '@/api/admin/user'

import Pagination from '@/components/Pagination'
import { Message } from 'element-ui'

export default {
  name: 'SelectUser',
  components: { Pagination },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    multipleSelect: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    selectedRecords: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filterText: '',
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      records: [],
      total: 0,
      //selectedRecords: [],
      listQuery: {
        current: 1,
        size: 10,
        userId: undefined,
        userName: undefined,
        orgId: undefined
      },
      currOrgId: ''
    }
  },
  computed: {
    visibleInChild: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  watch: {
    filterText (val) {
      this.$refs._selectOrgTree.filter(val)
    },
    visibleInChild (val) {
      if (!val) {
        this.$emit('selectUserCleared')
        this.selectedRecords = []
        this.records = []
      }
    }
  },
  methods: {
    close () {
      this.$emit('selectUserCleared')
      this.visibleInChild = false
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    getTreeData () {
      fetchTree().then((res) => {
        this.treeData = res.data.data
      })
    },
    handleNodeClick (node) {
      this.currOrgId = node.id
      this.listSysUsers()
    },
    listSysUsers () {
      // this.listQuery.orgId = this.currOrgId
      // getAction('/sys/user/listSelectUser', this.listQuery).then(res => {
      //   const { data } = res
      //   this.records = data.records
      //   this.total = data.total
      // })
      const self = this
      // fetchList(
      //   Object.assign(
      //     {
      //       current: this.listQuery.current,
      //       size: this.listQuery.size
      //     },
      //     { deptId: this.currOrgId }
      //   )
      // ).then((response) => {
      //   this.records = response.data.data.records
      //   this.total = response.data.data.total
      // })

      //页面分页显示人员信息
      fetchListByDeptId(
        Object.assign(
          {
            current: this.listQuery.current,
            size: this.listQuery.size
          },
          {
            deptId: self.currOrgId
          }
        )
      ).then((response) => {
        this.records = response.data.data.records
        this.total = response.data.data.total
      })
    },
    btnQuery () {
      this.listQuery.current = 1
      this.listSysUsers()
    },
    btnReset () {
      this.currOrgId = ''
      this.listQuery = {
        current: 1,
        size: 10,
        userId: undefined,
        userName: undefined,
        orgId: undefined
      }
      this.listSysUsers()
    },
    rowClick (row) {
      if (!this.multipleSelect) {
        this.selectedRecords = []
        this.selectedRecords[0] = row
      } else {
        const arr = this.selectedRecords
        const index = arr.findIndex((item) => item.userId === row.userId)
        if (index < 0) {
          arr.push(row)
        } else {
          arr.splice(index, 1)
        }
      }
    },
    btnRemoveAll () {
      this.selectedRecords = []
    },
    btnRemove (row) {
      const arr = this.selectedRecords
      arr.splice(
        arr.findIndex((item) => item.userId === row.userId),
        1
      )
    },
    confirm () {
      if (!this.selectedRecords || this.selectedRecords.length == 0) {
        Message.error('请先选择用户')
        return
      }

      if (this.multipleSelect) {
        this.$emit('selectUserFinished', this.selectedRecords)
      } else {
        this.$emit('selectUserFinished', this.selectedRecords[0])
      }
      // this.selectedRecords = []
      // this.records = []
      this.visibleInChild = false
    }
  }
}
</script>
<style scoped>
.selectUserBtn {
  display: inline-block;
  cursor: pointer;
  margin-right: 40px;
  position: relative;
}
.selectUserBtn::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 16px;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #dcdfe6;
}
</style>
