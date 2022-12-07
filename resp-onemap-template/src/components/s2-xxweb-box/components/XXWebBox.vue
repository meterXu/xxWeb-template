<template>
  <div class="xxWeb">
    <div class="xxWeb-box" :theme='appConfig.style.theme'>
      <Container class="main-container">
        <template v-if="appConfig.style.layout==='sidemenu'">
          <template v-if="device==='desktop'">
            <slot name="side" :data="{isCollapse,permission}">
              <SideMenu mode="vertical" :isCollapse="isCollapse" :activeIndex="activeIndex">
                <template v-slot:side-logo>
                  <slot name="side-logo"></slot>
                </template>
                <template v-slot:side-userMenu>
                  <slot name="side-userMenu"></slot>
                </template>
                <template v-slot:side-user-userName>
                  <slot name="side-user-userName"></slot>
                </template>
                <template v-slot:side-user-dropdownMenuItem="{menu}">
                  <slot name="side-user-dropdownMenuItem" menu="{menu}"></slot>
                </template>
                <template v-slot:side-user-tag>
                  <slot name="side-user-tag"></slot>
                </template>
                <template v-slot:side-user-tag-text>
                  <slot name="side-user-tag-text"></slot>
                </template>
              </SideMenu>
            </slot>
          </template>
          <DrawerMenu v-else v-model="isCollapse">
            <template v-slot:side-logo>
              <slot name="side-logo"></slot>
            </template>
            <template v-slot:side-userMenu>
              <slot name="side-userMenu"></slot>
            </template>
            <template v-slot:side-user-userName>
              <slot name="side-user-userName"></slot>
            </template>
            <template v-slot:side-user-dropdownMenuItem="{menu}">
              <slot name="side-user-dropdownMenuItem" menu="{menu}"></slot>
            </template>
            <template v-slot:side-user-tag>
              <slot name="side-user-tag"></slot>
            </template>
            <template v-slot:side-user-tag-text>
              <slot name="side-user-tag-text"></slot>
            </template>
          </DrawerMenu>
        </template>
        <Container class="content-container">
          <HeaderLayout :isCollapse="isCollapse">
            <template v-slot:head-hamburger>
              <slot name="head-hamburger"></slot>
            </template>
            <template v-slot:head-logo>
              <slot name="head-logo"></slot>
            </template>
            <template v-slot:head-title>
              <slot name="head-title"></slot>
            </template>
            <template v-slot:head-breadcrumb>
              <slot name="head-breadcrumb"></slot>
            </template>
            <template v-slot:heade-expand>
              <slot name="heade-expand"></slot>
            </template>
            <template v-slot:head-searchMenu>
              <slot name="head-searchMenu"></slot>
            </template>
            <template v-slot:head-fullScreen>
              <slot name="head-fullScreen"></slot>
            </template>
            <template v-slot:head-userMenu>
              <slot name="head-userMenu"></slot>
            </template>
            <template v-slot:head-user-userName>
              <slot name="head-user-userName"></slot>
            </template>
            <template v-slot:head-user-dropdownMenuItem="{menu}">
              <slot name="head-user-dropdownMenuItem" :menu="menu"></slot>
            </template>
            <template v-slot:head-user-tag>
              <slot name="head-user-tag"></slot>
            </template>
            <template v-slot:head-user-tag-text>
              <slot name="head-user-tag-text"></slot>
            </template>
          </HeaderLayout>
          <MainLayout/>
          <!-- 底部版权说明 -->
          <!-- <template v-if="appConfig.config.footer.show">
            <slot name="footer">
              <Footer class="footer">
                Copyright © {{appConfig.config.footer.copyright.year}}
                <a :href="appConfig.config.footer.copyright.href" :target="appConfig.config.footer.copyright.target">
                  {{appConfig.config.footer.copyright.content}}
                </a>
              </Footer>
            </slot>
          </template> -->
        </Container>
      </Container>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import '../assets/css/index.less'
import HeaderLayout from './layouts/header/HeaderLayout.vue';
import {Container,Aside,Main,Footer,Header} from 'element-ui'
import SideMenu from './layouts/left/SideMenu.vue';
import DrawerMenu from './layouts/left/DrawerMenu'
import MainLayout from './layouts/main/MainLayout.vue';
export default {
  name: 'XXWebBox',
  props:['appConfig','permission'],
  components:{
    MainLayout,
    SideMenu,
    Container,
    Footer,
    HeaderLayout,
    DrawerMenu,
  },
  data(){
    return {
      isCollapse:false,
      visitedViews:[],
      cachedViews:[],
      device:'desktop',
      activeIndex:null,
      WIDTH:992
    }
  },
  provide () {
    return {
      app:this,
      cachedViews:this.cachedViews,
      visitedViews:this.visitedViews,
      // slots:this.$slots,
      // scopedSlots:this.$scopedSlots
    }
  },
  methods:{
    isMobile() {
      const rect = document.body.getBoundingClientRect();
      return rect.width - 1 < this.WIDTH;
    },
    resizeHandler(){
      if (!document.hidden) {
        const isMobile = this.isMobile();
        this.device = isMobile ? 'mobile' : 'desktop'
      }
    }
  },
  watch:{
    activeIndex:{
      immediate:true,
      handler(nv){
        if(this.device==='mobile'){
          this.isCollapse = false
        }
      }
    }
  },
  created() {
    this.$bus.$on('dropdownMenuClick',(command) => {
      this.$emit('dropdownMenuClick',command)
    })
    this.$bus.$on('collapseToggle',() => {
      this.isCollapse = !this.isCollapse
      this.$emit('collapseToggle',this.isCollapse)
    })
    this.$bus.$on('searchMenuItemSelect',(activeIndex) => {
      this.activeIndex = activeIndex
    })
    this.$bus.$on('tabViewChange',(activeIndex) => {
      this.activeIndex = activeIndex
    })
  },
  mounted() {
    this.resizeHandler()
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
    this.$bus.$off()
    window.removeEventListener('resize', this.resizeHandler);
  }
}
</script>

<style scoped>

</style>
