<template>
  <div class="main">
    <one-map
      :appId="$project.variable.appid"
      :roleIds="roleIds"
      :axios="post"
      :baseUrl="$project.variable.datawayUrl"
      :customURL="customURL"
    />
  </div>
</template>
<script>
import { post } from '@/api/manage';
export default {
  computed: {
    roleIds() {
      return localStorage.getItem('roleIds')
        ? localStorage.getItem('roleIds').split(',')
        : [];
    },
  },
  data() {
    return {
      post,
      // 快查 / i查询 服务地址
      customURL: 'http://58.210.9.133/iplatform/rsep-onemap-service',
    };
  },
};
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
}
</style>
