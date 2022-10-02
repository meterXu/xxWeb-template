<template>
  <van-tabbar route>
    <van-tabbar-item @click="changeTitle('首页')" replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item @click="changeTitle('列表')" replace to="/list" icon="friends-o">列表</van-tabbar-item>
    <van-tabbar-item @click="changeTitle('设置')" replace to="/setting" icon="setting-o">设置</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Head',
  components: {
  },
  data(){
    return {
      value: ''
    }
  },
  methods:{
    changeTitle(data) {
      this.$store.commit('setHeadTitle',data)
    }
  }
}
</script>

<style scoped>

</style>
