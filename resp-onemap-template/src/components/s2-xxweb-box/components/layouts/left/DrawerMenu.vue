<template>
  <Drawer :visible="visible"
          direction="ltr"
          :show-close="false"
          custom-class="mobile-drawer"
          :size="app.appConfig.config.sideMenu.width"
          :before-close="handleClose">
    <slot name="leftSide" :data="{isCollapse:false,permission:this.app.permission}">
      <SideMenu :isCollapse="false" mode="vertical">
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
  </Drawer>
</template>

<script>
import mixin from "../../../mixin/mixin";
import SideMenu from './SideMenu'
import {Drawer} from 'element-ui'
export default {
  name: "DrawerMenu",
  props:['visible'],
  model:{
    prop:'visible',
    event:'change'
  },
  mixins:[mixin],
  components:{SideMenu,Drawer},
  methods:{
    handleClose(){
      this.$emit('change',false)
    }
  }
}
</script>

<style scoped>

</style>
