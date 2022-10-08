<template>
  <div class="con">
    <p class="con-p title">
      欢迎使用s2开发框架！
    </p>
    <p class="con-p">
      <img alt="s2 logo" src="../../assets/logo.png">
    </p>
    <p class="con-p">
      <a href="http://58.210.9.133/iplatform/pldoc/" target="_blank">在线帮助文档</a>
    </p>
  </div>
</template>

<script>

export default {
  name: 'ReadMe',
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style scoped>
.con {
  padding: 20px 0;
}
.con-p {
  text-align: center;
  font-size: 16px;
  padding: 10px 0;
}
.title {
  text-align: center;
  margin-top: 150px;
  font-size: 36px;
}
</style>
