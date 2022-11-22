<template>
  <XXWebBox v-if="menu.length>0" :appConfig="project" :permission="menu" @dropdownMenuClick="dropdownMenuClick">
    <template v-slot:head-user-userName>
      {{ userInfo.realname }}
    </template>
  </XXWebBox>
</template>

<script>
import {types,util} from '@dpark/s2-xxweb-utils';
import {queryPermissionsByUser} from '../api';
import {mapGetters} from 'vuex';

export default {
  name: 'Index',
  data() {
    return {
      project: this.$project,
      menu: []
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
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
    this.$store.commit('setUserInfo',JSON.parse(this.$ls.get(types.USER_INFO)))
    queryPermissionsByUser().then(res=>{
      this.menu = res.menu
      this.$store.commit('setAllPerms',res.allPerms)
    })

  }
}
</script>

<style scoped>

</style>