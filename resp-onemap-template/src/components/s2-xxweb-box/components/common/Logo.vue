<template>
  <div class="logo">
    <img :src="imgSrc" alt="logo">
    <transition name="title">
      <h1 v-if="!isCollapse" class="title">{{title}}</h1>
    </transition>
  </div>
</template>

<script>
import mixin from '../../mixin/mixin';
export default {
  name: 'Logo',
  mixins:[mixin],
  props:['isCollapse'],
  computed:{
    imgSrc(){
      return this.app.appConfig.config.logo
    },
    title(){
      return this.app.appConfig.config.projectName
    }
  }
}
</script>

<style scoped>

</style>
