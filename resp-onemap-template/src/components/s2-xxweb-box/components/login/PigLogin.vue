<template>
  <div class="xxWeb">
    <div class="pig-login">
        <div class="login-div">
          <slot v-bind:config="config">
            <div class="box">
              <h3 v-if="config.login">
                {{config.login.title}}
                <br/>
              </h3>
              <Form ref="loginForm" :model="form" :rules="rules" class="login-form" status-icon label-width="0">
                <slot name="form-item-prefix"></slot>
                <br>
                <p>
                  <slot name="form-label-username">
                    账户
                  </slot>
                </p>
                <FormItem prop="username">
                  <Input prefix-icon="el-icon-user" v-model="form.username" :placeholder="placeholder.username"/>
                </FormItem>
                <p>
                  <slot name="form-label-password">
                    密码
                  </slot>
                </p>
                <FormItem prop="password">
                  <Input type="password" prefix-icon="el-icon-lock" v-model="form.password" :placeholder="placeholder.password"/>
                </FormItem>
                <slot name="form-item-suffix"></slot>
                <FormItem v-if="remember">
                  <Checkbox v-model="form.remember">记住密码</Checkbox>
                </FormItem>
                <FormItem>
                  <slot name="form-login-btn">
                    <Button size="small" class="login-submit login-btn" @click="login">
                      登录
                    </Button>
                  </slot>
                </FormItem>
              </Form>
            </div>
          </slot>
        </div>
    </div>
  </div>
</template>

<script>
import '../../assets/css/login/pig-login.less'
import {Form,FormItem,Input,Button,Checkbox} from 'element-ui'
export default {
  name: 'PigLogin',
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
