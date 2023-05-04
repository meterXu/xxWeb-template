<template>
  <JeecgLogin :config="project.config" v-model="form" @login="login"></JeecgLogin>
</template>

<script>
import {types} from 'xxweb-utils';
import {JeecgLogin} from 'xxweb-box'
export default {
  name:'login',
  data(){
    return{
      project: this.$project,
      form:{
        username:null,
        password:null,
        remember:false
      }
    }
  },
  components:{
    JeecgLogin
  },
  methods:{
    login(valid){
      if(valid){
        this.$ls.set(types.ACCESS_TOKEN,'xxxxxx')
        this.$ls.set(types.USER_INFO,JSON.stringify({
          realname:'管理员'
        }))
        this.$router.push({name:'Index'})
      }
    }
  }
}
</script>

<style>

</style>
