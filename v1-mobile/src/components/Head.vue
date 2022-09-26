<template>
<div class="head">
  <van-nav-bar :title="showHeadTitle" fixed z-index="10">
    <van-icon name="search" slot="right" @click="onSearch"/>
  </van-nav-bar>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name: "Head",
  components: {

  },
  data(){
    return {
      value: ""
    }
  },
  computed:{
    ...mapGetters(["showHeadTitle"])
  },
  methods:{
    onSearch() {
      console.log(this.value);
    }
  }
}
</script>

<style scoped>
.head {
  height: 9vh;
}
</style>
