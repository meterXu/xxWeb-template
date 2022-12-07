<template>
  <Breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <BreadcrumbItem v-for="(item,index) in levelList" :key="item.path">
        <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </BreadcrumbItem>
    </transition-group>
  </Breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp';
import {Breadcrumb,BreadcrumbItem} from 'element-ui'
import mixin from "../../../mixin/mixin";
export default {
  name: "HeadBreadcrumb",
  components:{Breadcrumb,BreadcrumbItem},
  mixins:[mixin],
  data(){
    return {
      levelList:[]
    }
  },
  watch:{
    $route() {
      this.getBreadcrumb();
    }
  },
  methods:{
    pathCompile(path) {
      try{
        const { params } = this.$route;
        let compileObj = pathToRegexp.compile(path);
        return compileObj(params);
      }catch (err){
        return null
      }
    },
    handleLink(item){
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      let route = this.pathCompile(path||'/')
      this.$router.push(route);
    },
    getBreadcrumb(){
      let that = this
      this.levelList = []
      this.$route.matched.forEach(m=>{
        if(m.meta&&m.meta.title){
          this.levelList.push(m)
        }else{
          let path = that.pathCompile(m.path||'/')
          let menu = that.searchMenuByPath(that.app.permission,path)
          if(menu&&menu.meta&&menu.meta.title){
            that.levelList.push(Object.assign({},m,{meta:menu.meta}))
          }
        }
      })
    }
  },
  created() {
    this.getBreadcrumb()
  }
}
</script>

<style scoped>

</style>
