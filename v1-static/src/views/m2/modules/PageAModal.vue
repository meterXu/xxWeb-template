<template>
  <a-modal
    title="弹窗"
    :width="800"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    :ok-button-props="{ props: { disabled: this.disabled } }"
    cancelText="关闭"
  >
    <a-spin :spinning="confirmLoading">
      <a-form-model ref="form" :model="formObj" :rules="rules">
        <a-form-model-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="标题" prop="title">
          <a-input v-model="formObj.title"></a-input>
        </a-form-model-item>
        <a-form-model-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="类型" prop="type">
          <a-input v-model="formObj.type"></a-input>
        </a-form-model-item>
        <a-form-model-item :labelCol="labelCol" :wrapperCol="wrapperCol" label="方法" prop="method">
          <a-select placeholder="请选择方法" v-model="formObj.method">
            <a-select-option value="GET">GET</a-select-option>
            <a-select-option value="POST">POST</a-select-option>
            <a-select-option value="PUT">PUT</a-select-option>
            <a-select-option value="DELETE">DELETE</a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="远程地址"
          prop="remoteAddr"
        >
          <a-input v-model="formObj.remoteAddr"></a-input>
        </a-form-model-item>
        <a-form-model-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="客户标识"
          prop="userAgent"
        >
          <a-textarea v-model="formObj.userAgent" :auto-size="{ minRows: 3, maxRows: 5 }"></a-textarea>
        </a-form-model-item>
      </a-form-model>
    </a-spin>
  </a-modal>
</template>

    <script>
  export default {
    name: 'PageAModal',
    props: ['visible', 'formObj'],
    model: {
      prop: 'visible',
      event: 'change'
    },
    data() {
      return {
        disabled: false,
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        },
        confirmLoading: false,
        rules: {
        title: [{ required: true, message: '标题必填！', trigger: 'blur' }],
        type: [{ required: true, message: '类型必填！', trigger: 'blur' }],
        method: [{ required: true, message: '方法必填！', trigger: 'blur' }]
        },
        url: {
          add: '/log/create',
          edit: '/log/create'
        }
      }
    },
    methods: {
      close() {
        this.$emit('change', false)
      },
      handleCancel() {
        this.close()
      },
      handleOk() {
        const that = this
        this.$refs.form.validate(valid => {
          if (valid) {
            that.confirmLoading = true
            let httpurl = ''
            let method = ''
            if (!this.formObj.id) {
              httpurl += this.url.add
              method = 'post'
            } else {
              httpurl += this.url.edit
              method = 'put'
            }

            // begin 模拟方法，静态表格增加，修改成功；实际开发请删除
            that.$message.success('编辑成功')
            that.$emit('ok')
            that.confirmLoading = false
            that.close()
            // end

            /**
             * 实际开发请用此处请求后端
              httpAction(httpurl, this.formObj, method)
                  .then((res) => {
                      if (res.success) {
                          that.$message.success(res.message)
                          that.$emit('ok')
                      } else {
                          that.$message.warning(res.message)
                      }
                  })
                  .finally(() => {
                      that.confirmLoading = false
                      that.close()
                  })
             */
          }
        })
      }
    }
  }
  </script>

    <style>
  </style>
