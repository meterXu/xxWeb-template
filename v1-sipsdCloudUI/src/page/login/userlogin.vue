<template>
  <div class="box">
    <h3>
      你好!欢迎登录
      <br />
      {{ website.indexTitle }}
    </h3>
    <el-form ref="loginForm" :rules="loginRules" :model="loginForm" class="login-form" status-icon label-width="0">
      <br>
      <p>账户</p>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" size="small" auto-complete="off" placeholder="请输入用户姓名" class="username-passwd-div" @keyup.enter.native="handleLogin">
          <!-- <i slot="prefix" class="icon-yonghu"/> -->
        </el-input>
      </el-form-item>
      <p>密码</p>
      <el-form-item prop="password">
        <el-input :type="passwordType" v-model="loginForm.password" size="small" auto-complete="off" placeholder="请输入密码" class="username-passwd-div" @keyup.enter.native="handleLogin">
          <!-- <i slot="prefix" class="icon-mima"/>
          <i slot="suffix" class="el-icon-view el-input__icon" @click="showPassword"/> -->
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" class="login-submit login-btn" @click.native.prevent="handleLogin"><span style="font-weight:bold;">登录</span></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { randomLenNum } from '@/util/util'
import { mapGetters } from 'vuex'
export default {
  name: 'Userlogin',
  data() {
    return {
      socialForm: {
        code: '',
        state: ''
      },
      loginForm: {
        username: '',
        password: '',
        code: '',
        redomStr: ''
      },
      checked: false,
      code: {
        src: '/code',
        value: '',
        len: 4,
        type: 'image'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '验证码长度为4位', trigger: 'blur' }
        ]
      },
      passwordType: 'password'
    }
  },

  computed: {
    ...mapGetters(['tagWel', 'website'])
  },

  mounted() {},

  created() {
    this.refreshCode()
  },
  methods: {
    refreshCode() {
      this.loginForm.code = ''
      this.loginForm.randomStr = randomLenNum(this.code.len, true)
      this.code.type === 'text'
        ? (this.code.value = randomLenNum(this.code.len))
        : (this.code.src = `${this.codeUrl}?randomStr=${this.loginForm.randomStr}`)
    },
    showPassword() {
      this.passwordType == ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.$router.push({ path: this.tagWel.value })
          }).catch(() => {
            this.refreshCode()
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
.el-form-item__error {
  // margin-left: 20%;
}
.login-form .el-input input {
  border-radius: 17px 17px !important;
}
.username-passwd-div {
  width: 100%;
  padding: 0;
  text-align: left;
}
.login-form .el-input input {
  border: none;
  outline: medium;
  padding: 0;
  border-bottom: 1px solid #ccc;
  line-height: 40px;
}
// 改版后的样式
.box {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;

  h3 {
    width: 402px;
    font-size: 40px;
    color: #1a50aa;
    font-weight: 700;
    line-height: 50px;
    margin: 117px auto 0 auto;
  }

  .login-form {
    width: 379px;
    margin: 76px auto 0 auto;

    .el-form-item {
      margin-bottom: 22px;
    }

    p {
      font-size: 20px;
      font-weight: 700;
      color: #1a50aa;
      line-height: 30px;
      opacity: .8;
      margin-bottom: 10px;
    }
  }
}
</style>
