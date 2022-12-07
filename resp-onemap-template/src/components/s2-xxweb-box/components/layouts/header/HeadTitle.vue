<template>
  <div class="head-title">
    <span> {{headTitle}} </span>
  </div>
</template>

<script>
import mixin from '../../../mixin/mixin';
export default {
  name: 'HeadTitle',
  mixins:[mixin],
  data(){
    return {
      device:'desktop',
    }
  },
  computed:{
    headTitle(){
      if(this.device==='desktop'){
        return `欢迎使用${this.app.appConfig.config.projectName}`
      }else{
        return this.app.appConfig.config.projectName
      }
    }
  },
}
</script>

<style scoped>

</style>
