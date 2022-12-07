<template>
  <i class="el-icon-full-screen" @click="handleFullScreen"></i>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "FullScreen",
  methods:{
    handleFullScreen(){
      const element = document.querySelector("body");
      if (element) screenfull.toggle(element);
    }
  }
}
</script>

<style scoped>

</style>