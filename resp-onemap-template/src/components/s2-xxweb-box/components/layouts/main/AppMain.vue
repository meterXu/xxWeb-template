<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <div class="transition-container">
        <keep-alive :include="cachedViews">
          <router-view ref="pageView" :key="key"/>
        </keep-alive>
      </div>
    </transition>
  </section>
</template>

<script>
import mixin from '../../../mixin/mixin';
export default {
  name: 'AppMain',
  data(){
    return {
      refreshStamp:null
    }
  },
  mixins:[mixin],
  computed: {
    key(){
      return this.$route.path+(this.refreshStamp||'');
    }
  },
  methods:{
    refresh(){
      this.refreshStamp = new Date().valueOf()
    }
  }
}
</script>

<style scoped>
.transition-container{
  width: 100%;
  height: 100%;
}
</style>
