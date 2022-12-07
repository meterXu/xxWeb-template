<template>
  <Scrollbar wrap-class="side-scrollbar">
    <Aside class="side-menu" :width="width">
      <slot name="side-logo" v-if="app.appConfig.config.sideMenu.logo.show">
        <Logo :isCollapse="isCollapse"/>
      </slot>
      <slot name="side-userMenu" v-if="app.appConfig.config.sideMenu.user.show">
        <UserMenu type='avatar' :isCollapse="isCollapse">
          <template v-slot:side-user-userName>
            <slot name="side-user-userName"></slot>
          </template>
          <template v-slot:side-user-dropdownMenuItem="{menu}">
            <slot name="side-user-dropdownMenuItem" :menu="menu"></slot>
          </template>
          <template v-slot:side-user-tag>
            <slot name="side-user-tag"></slot>
          </template>
          <template v-slot:side-user-tag-text>
            <slot name="side-user-tag-text"></slot>
          </template>
        </UserMenu>
      </slot>
      <DynamicMenu
          :mode="mode"
          :isCollapse="isCollapse"
          :defaultActive="activeIndex">
      </DynamicMenu>
    </Aside>
  </Scrollbar>
</template>

<script>
import {Aside,Menu,MenuItem,Submenu} from 'element-ui'
import Scrollbar from 'element-ui/lib/scrollbar'
import mixin from '../../../mixin/mixin';
import DynamicMenu from '../../common/DynamicMenu.vue'
import Logo from '../../common/Logo.vue';
import UserMenu from '../header/UserMenu.vue';
export default {
  name: 'SideMenu',
  props:['mode','isCollapse','activeIndex'],
  mixins:[mixin],
  components:{
    Logo,
    Aside,
    Scrollbar,
    DynamicMenu,
    UserMenu
  },
  computed:{
    width(){
      return this.isCollapse?'65px': this.app.appConfig.config.sideMenu.width
    },
    title(){
      return this.app.appConfig.config.projectName
    }
  },
  methods:{
  },
  created() {
  }
}
</script>

<style scoped>

</style>
