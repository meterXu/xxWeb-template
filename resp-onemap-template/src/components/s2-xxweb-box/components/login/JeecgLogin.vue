<template>
  <div class="xxWeb">
    <div class="jeecg-login">
      <div class="container">
        <slot v-bind:config="config">
          <div class="top">
            <div class="header">
              <img v-if="config.logo" :src="config.logo" class="logo" alt="logo">
              <span v-if="config.login" class="title">{{config.login.title }}</span>
            </div>
            <div class="desc">
              {{ config.login.desc }}
            </div>
          </div>
          <div class="main">
            <div v-if="tips" class="login-title">系统登录</div>
            <Form ref="loginForm" :model="form" :rules="rules">
              <slot name="form-item-prefix"></slot>
              <FormItem prop="username">
                <Input prefix-icon="el-icon-user" v-model="form.username" :placeholder="placeholder.username"/>
              </FormItem>
              <FormItem prop="password">
                <Input prefix-icon="el-icon-lock" type="password" v-model="form.password" :placeholder="placeholder.password"/>
              </FormItem>
              <slot name="form-item-suffix"></slot>
              <FormItem v-if="remember">
                <Checkbox v-model="form.remember">记住密码</Checkbox>
              </FormItem>
            </Form>
            <slot name="form-login-btn">
              <Button class="login-btn" type="primary" @click="login">登 录</Button>
            </slot>
          </div>
        </slot>
      </div>
      <div class="footer" v-if="config.footer.show">
        <template v-if="config.footer.links">
          <div class="links">
            <template v-for="link in config.footer.links">
              <a :key="link.name" :href="link.href" :target="link.target">{{ link.name }}</a>
            </template>
          </div>
        </template>
        <template v-if="config.footer.copyright">
          <div class="copyright" v-if="config.footer.copyright">
            Copyright &copy; {{ config.footer.copyright.year }} <a :href="config.footer.copyright.href" :target="config.footer.copyright.target">{{ config.footer.copyright.content }}</a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/css/login/jeecg-login.less'
import {Form,FormItem,Input,Button,Checkbox} from 'element-ui'
export default {
  name: 'JeecgLogin',
  props:{
    config:{default(){return {}}},
    tips:{default:true},
    remember:{default:true},
    placeholder:{default(){return{username:'请输入用户名/邮箱/手机号','password':'请输入密码'}}},
    rules:{
      type:Object,
      default(){
        return {
          username:[
            { required: true, message: '用户名不能为空',trigger: 'blur'},
          ],
          password:[
            { required: true, message: '密码不能为空',trigger: 'blur'},
          ]
        }
      }
    },
    form:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  model:{
    prop:'form',
    event:'change'
  },
  components:{
    Form,
    FormItem,
    Input,
    Button,
    Checkbox
  },
  methods:{
    login(){
      this.$refs.loginForm.validate(valid=>{
        this.$emit('login',valid)
      })
    }
  }
}
</script>

<style scoped>

</style>
