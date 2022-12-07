<template>
  <div class="xxWeb">
    <div class="watermelon-login">
      <slot v-bind:config="config">
        <div class="login-main">
          <!-- 左边部分 -->
          <div class="login-main-left">
            <div class="main-left-img"></div>
          </div>
          <!-- 右边部分 -->
          <div class="login-main-right">
            <div class="main-right-box">
              <div class="main-right-box-text">
                <h3 v-if="config.login">
                  {{config.login.title}}
                  <br/>
                </h3>
              </div>
              <div class="main-right-box-input">
                <slot name="form-item-prefix"></slot>
                <Form ref="loginForm" :model="form" :rules="rules" class="login_from">
                  <FormItem prop="username">
                    <Input
                        v-model="form.username"
                        :placeholder="placeholder.username"
                    ></Input>
                  </FormItem>
                  <FormItem prop="password">
                    <Input
                        v-model="form.password"
                        :placeholder="placeholder.password"
                        show-password
                    ></Input>
                  </FormItem>
                  <slot name="form-item-suffix"></slot>
                  <FormItem class="check-box" v-if="remember">
                    <Checkbox v-model="form.remember" label="记住密码" name="type"></Checkbox>
                  </FormItem>
                  <FormItem>
                    <slot name="form-login-btn">
                      <Button type="primary" @click="login">登录</Button>
                    </slot>
                  </FormItem>
                </Form>
              </div>
            </div>
            <!-- 底层文字 -->
            <div class="botton-text">
              <a href="javascript:;">注册</a>
            </div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import '../../assets/css/login/watermelon-login.less'
import {Form,FormItem,Input,Button,Checkbox} from 'element-ui'
export default {
  name: 'WatermelonLogin',
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
