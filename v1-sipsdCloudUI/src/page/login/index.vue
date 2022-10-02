<template>
  <div style="display:flex;flex-direction: row;height:100%;">
    <div
      class="login-container"
      style="width:100%;"
    >
      <!-- <img
        src="@/assets/img/logo.png"
        style="vertical-align:middle;"
      >
      <span style="color:rgb(14,157,249);font-size:25px;font-weight:bold;margin-left:1%;">排水设施设备管理系统</span> -->
      <div class="login-div">
        <userLogin />
        <el-button
          type="primary"
          class="login-submit ssologin"
          @click.native.prevent="SSOHandleLogin">SSO登录</el-button>
      </div>
    </div>
    <top-color v-show="false"/>
  </div>
</template>
<script>
import request from '@/router/axios'
import userLogin from './userlogin'
import codeLogin from './codelogin'
import { mapGetters } from 'vuex'
import { getStore, setStore } from '@/util/store'
import { dateFormat } from '@/util/date'
import topColor from '@/page/index/top/top-color'
import { openWindow, getQueryString } from '@/util/util'

export default {
  name: 'Login',
  components: {
    userLogin,
    codeLogin,
    topColor
  },
  data() {
    return {
      tenantList: [],
      time: '',
      active: '1',
      activeName: 'user',
      socialForm: {},
      redirectUri: window.encodeURIComponent(window.location.origin + this.$conf.publicPath)
    }
  },
  computed: {
    ...mapGetters(['website', 'tagWel'])
  },
  watch: {
    $route: {
      handler() {
        const url = window.location.href.replace('#/login', '')
        const state = getQueryString(url, 'state')
        const code = getQueryString(url, 'code')
        if (this.validatenull(code) && this.validatenull(state)) return
        const loading = this.$loading({
          lock: true,
          text: '登录中,请稍后。。。',
          spinner: 'el-icon-loading'
        })
        this.$store.dispatch('SsoLogin', {
          code: code,
          redirectUri: this.redirectUri
        }).then((res) => {
          loading.close()
          window.opener.location.reload()
          window.close()
          this.$router.push({ path: this.tagWel.value })
        }).catch((e) => {
          loading.close()
        })
      },
      immediate: true
    }
  },
  created() {
    this.watermark()
    this.getTenantList()
    this.active = getStore({ name: 'tenantId' })
    this.getTime()
    setInterval(() => {
      this.getTime()
    }, 1000)
  },
  mounted() {
  },
  methods: {
    handleCommand(command) {
      setStore({ name: 'tenantId', content: command })
    },
    getTime() {
      this.time = dateFormat(new Date())
    },
    getTenantList() {
      request({
        url: '/admin/tenant/list',
        method: 'get'
      }).then(response => {
        if(response)
          this.tenantList = response.data.data
      })
    },
    watermark() {
      const text = ''
      const canvas = document.createElement('canvas')
      canvas.width = '500'
      canvas.height = '200'
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, 200, 200) // 绘制之前画布清除
      ctx.font = '30px 黑体'
      ctx.rotate((-20 * Math.PI) / 180) // 为了实现水印倾斜效果,旋转画布坐标系
      ctx.fillStyle = 'rgba(100,100,100,0.15)' // 画笔颜色
      ctx.fillText(text, -20, 200) // 书写的内容及位置
      ctx.rotate('20*Math.PI/180') // 坐标系还原,如果后续没有其他操作,这一步可以省略
      // 将canvas的内容转换为base64编码
      const data = canvas.toDataURL('image/png', 1) // 1表示质量(无损压缩)

      window.onload = () => {
        const background = 'url(' + data + ') repeat'
        var watermark = document.createElement('div')
        watermark.style.width = '100%'
        watermark.style.height = '100%'
        watermark.style.position = 'fixed'
        watermark.style.left = '0'
        watermark.style.top = '0'
        watermark.style.pointerEvents = 'none'
        watermark.style.background = background
        watermark.style.zIndex = '9999'
        document.body.append(watermark)
      }
    },
    SSOHandleLogin() {
      const client_id = 'facility'
      const url = `${this.$conf.authUrl}/oauth/authorize?response_type=code&scope=server&state=sso-LOGIN&client_id=${client_id}&redirect_uri=${this.redirectUri}`
      openWindow(url, 'SSO登录', 540, 540)
      // window.location.href=url
    }
  }
}
</script>
<style lang="scss">
.login-div {
  // width: 20%;
  // height: 52%;
  // margin-top: 2%;
  // margin-left: 75%;
  // background-image: linear-gradient(#335a8f, gray);
  // filter: opacity(90%);

    width: 1465px;
    height: 798px;
    background-image: url('../../assets/img/banner.png');
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
.login-container {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.login-weaper {
  margin: 0 auto;
  width: 1000px;
  box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.4);
}

.login-left,
.login-border {
  position: relative;
  min-height: 500px;
  align-items: center;
  display: flex;
}

.login-left {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  justify-content: center;
  flex-direction: column;
  background-color: #409eff;
  color: #fff;
  float: left;
  width: 50%;
  position: relative;
}

.login-left .img {
  width: 140px;
}

.login-time {
  position: absolute;
  left: 25px;
  top: 25px;
  width: 100%;
  color: #fff;
  font-weight: 200;
  opacity: 0.9;
  font-size: 18px;
  overflow: hidden;
}
.ssologin {
  position: absolute;
  bottom: 44px;
  right: 12%;
}
.login-left .title {
  margin-top: 60px;
  text-align: center;
  color: #fff;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 25px;
}

.login-border {
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  background-color: #fff;
  width: 50%;
  float: left;
  box-sizing: border-box;
}

.login-main {
  margin: 0 auto;
  width: 65%;
  box-sizing: border-box;
}

.login-main > h3 {
  margin-bottom: 20px;
}

.login-main > p {
  color: #76838f;
}

.login-title {
  color: #333;
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  letter-spacing: 4px;
}

.login-select {
  input {
    color: #333;
    font-size: 18px;
    font-weight: 400;
    border: none;
    text-align: center;
  }
}

.login-menu {
  margin-top: 40px;
  width: 100%;
  text-align: center;

  a {
    color: #999;
    font-size: 12px;
    margin: 0px 8px;
  }
}

// .el-button:hover {
//   color: #fff;
//   background: #1a50aa;
// }


.login-submit {
  color: #409eff;
  cursor: pointer;

  margin-top: 50px;
  width: 374px;
  height: 68px;
  background: #1a50aa;
  border-radius: 34px;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
}

.login-form {
  margin: 10px 0;

  i {
    color: #333;
  }

  .el-form-item__content {
    width: 100%;
  }

  .el-form-item {
    margin-bottom: 12px;
  }

  .el-input {
    input {
      padding-bottom: 10px;
      text-indent: 5px;
      background: transparent;
      border: none;
      border-radius: 0;
      color: #333;
      border-bottom: 1px solid rgb(235, 237, 242);
    }

    .el-input__prefix {
      i {
        padding: 0 5px;
        font-size: 16px !important;
      }
    }
  }
}

.login-code {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 0 0 10px;
}

.login-code-img {
  margin-top: 2px;
  width: 100px;
  height: 38px;
  background-color: #fdfdfd;
  border: 1px solid #f0f0f0;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 38px;
  text-indent: 5px;
  text-align: center;
}
</style>
