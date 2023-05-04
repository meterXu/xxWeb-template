<template>
  <XXWebBox v-if="menu.length>0" :appConfig="project" :permission="menu" @dropdownMenuClick="dropdownMenuClick">
    <template v-slot:head-user-userName>
      {{ realname }}
    </template>
  </XXWebBox>
</template>

<script>
import {types,util} from 'xxweb-utils';
import {queryPermissionsByUser} from '../api';

export default {
  name: 'Index',
  data() {
    return {
      project: this.$project,
      menu: []
    }
  },
  computed: {
    realname() {
      let userinfo = JSON.parse(this.$ls.get(types.USER_INFO))
      return userinfo.realname
    }
  },
  methods:{
    dropdownMenuClick(command){
      switch (command){
      case 'exitSystem':{
        util.logOut(this,this.$project)
      }
      }
    }
  },
  created() {
    queryPermissionsByUser().then(res=>{
      this.menu = res.menu
      this.$store.commit('setAllPerms',res.allPerms)
    })

  }
}
</script>

<style scoped>

</style>