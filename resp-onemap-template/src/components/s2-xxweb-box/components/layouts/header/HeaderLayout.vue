<template>
  <Header :class="['header',topmenu&&'top-header'] ">
    <slot name="header">
      <div class="header-content">
        <div class="row-head">
          <div class="left-con">
            <div v-if="sidemenu" class="user-menu-item">
              <slot name="head-hamburger" v-if="!app.appConfig.style.fixSide">
                <Hamburger :isCollapse="isCollapse"/>
              </slot>
            </div>
            <div v-if="topmenu" class="user-menu-item">
              <slot  name="head-logo" v-if="app.appConfig.config.head.logo.show">
                <Logo :isCollapse="false"/>
              </slot>
            </div>
            <div class="user-menu-item">
              <slot name="head-title" v-if="app.appConfig.config.head.title.show">
                <HeadTitle/>
              </slot>
            </div>
            <div class="user-menu-item">
              <slot name="head-breadcrumb" v-if="app.appConfig.config.head.breadcrumb.show">
                <HeadBreadcrumb/>
              </slot>
            </div>
            <div v-if="topmenu" class="user-menu-item">
              <DynamicMenu :isCollapse="false" mode="horizontal" :defaultActive="defaultActive"></DynamicMenu>
            </div>
            <slot name="heade-expand"></slot>
          </div>
          <div class="right-con">
            <div class="user-menu-item">
              <slot name="head-searchMenu" v-if="app.appConfig.config.head.searchMenu.show">
                <SearchMenu/>
              </slot>
            </div>
            <div class="user-menu-item">
              <slot name="head-fullScreen" v-if="app.appConfig.config.head.fullscreen.show">
                <FullScreen/>
              </slot>
            </div>
            <div class="user-menu-item">
              <slot name="head-userMenu" v-if="app.appConfig.config.head.user.show">
                <UserMenu type="text">
                  <template v-slot:side-user-userName>
                    <slot name="head-user-userName"></slot>
                  </template>
                  <template v-slot:side-user-dropdownMenuItem="{menu}">
                    <slot name="head-user-dropdownMenuItem" :menu="menu"></slot>
                  </template>
                  <template v-slot:side-user-tag>
                    <slot name="head-user-tag"></slot>
                  </template>
                  <template v-slot:side-user-tag-text>
                    <slot name="head-user-tag-text"></slot>
                  </template>
                </UserMenu>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </slot>
  </Header>
</template>

<script>
import {Header} from 'element-ui'
import mixin from '../../../mixin/mixin';
import Logo from '../../../components/common/Logo.vue';
import Hamburger from './Hamburger.vue';
import HeadTitle from './HeadTitle.vue';
import HeadBreadcrumb from './HeadBreadcrumb.vue';
import SearchMenu from './SearchMenu.vue';
import FullScreen from './FullScreen.vue';
import UserMenu from './UserMenu.vue';
import DynamicMenu from '../../common/DynamicMenu.vue'
export default {
  name: 'HeaderLayout',
  mixins: [mixin],
  props:['isCollapse'],
  components: {
    Logo,
    Hamburger,
    HeadTitle,
    HeadBreadcrumb,
    SearchMenu,
    FullScreen,
    UserMenu,
    Header,
    DynamicMenu
  },
  computed:{
    sidemenu(){
      return this.app.appConfig.style.layout==='sidemenu'
    },
    topmenu(){
      return this.app.appConfig.style.layout==='topmenu'
    },
    defaultActive(){
      return this.$route.path
    }
  },
  methods: {
    toggle() {
      this.$emit('collapseToggle')
    }
  }
}
</script>

<style scoped>
</style>
