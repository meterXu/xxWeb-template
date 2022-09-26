<template>
  <el-dialog
      :title="title"
      :visible.sync="visible"
      width="36%">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
      <el-form-item label="网关名称：" prop="routeName">
        <el-col :span="21">
          <el-input v-model="form.routeName" placeholder="请输入网关名称"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="网关编码：" prop="routeId">
        <el-col :span="21">
          <el-input :disabled="title==='编辑'" v-model="form.routeId" placeholder="请输入网关编码"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="网关路径：" prop="predicates">
        <el-col :span="21">
          <el-input v-model="form.predicates" placeholder="格式：/demo/**"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="服务源地址：" prop="uri">
        <el-col :span="21">
          <el-input v-model="form.uri" placeholder="格式：lb://sipsd-simple或http://localhost:9200"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="是否生效：" prop="delFlag">
        <el-col :span="21">
          <el-radio-group v-model="form.delFlag">
            <el-radio label="0">是</el-radio>
            <el-radio label="1">否</el-radio>
          </el-radio-group>
        </el-col>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onCancel">取 消</el-button>
      <el-button type="primary" @click="handleSuccess">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  name: 'RouteEdit',
  props:['visible','title','form'],
  data() {
    return {
      rules: {
        routeName: [
          { required: true, message: '请输入网关名称', trigger: 'change' },
        ],
        routeId: [
          { required: true, message: '请输入网关编码', trigger: 'change' },
        ],
        predicates: [
          { required: true, message: '请输入网关路径', trigger: 'change' },
          { pattern: /^\/\w+\/\*{2}$/, message: '网关路径不合法' },
        ],
        uri: [
          { required: true, message: '请输入服务源地址', trigger: 'change' },
          { pattern: /^(http|https|lb):\/\/([\w.]+\/?)\S*$/, message: '服务源地址不合法' },
        ],
        delFlag: [
          { required: true, message: '请选择是否生效', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    onCancel() {
      this.visible = false
    },
    handleSuccess(){

    }
  }
}
</script>

<style scoped>
.sel-suffix {
  text-align: center;
}
</style>
