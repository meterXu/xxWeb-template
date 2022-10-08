<template>
  <div class="setting">
    <van-cell-group class="group">
      <van-cell title-class="title-class" v-for="item in items1" :key="item.id" :title="item.setName" :value="item.value" is-link/>   
    </van-cell-group>
    <van-cell-group class="group">
      <van-cell title-class="title-class" v-for="item in items2" :key="item.id" :title="item.setName" :value="item.value" is-link/>   
    </van-cell-group>
    <van-cell-group class="group">
      <van-cell title-class="title-class" title="帮助与反馈" value="" is-link/>   
    </van-cell-group>
    <van-cell-group class="group">
      <van-cell title="切换账户"/>   
    </van-cell-group>
    <van-cell-group class="group">
      <van-cell title="退出登录"/>   
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  components: {

  },
  data(){
    return {
      items1:[
        {
          id: 0,
          setName: '账户与安全',
          value: ''
        },{
          id: 1,
          setName: '支付',
          value: ''
        }],
      items2:[
        {
          id: 0,
          setName: '消息通知',
          value: ''
        },{
          id: 1,
          setName: '主题换肤',
          value: ''
        },{
          id: 2,
          setName: '隐私',
          value: ''
        },{
          id: 3,
          setName: '通用',
          value: '地区、音效、辅助功能等'
        }]
    }
  },
  methods:{
    onSearch() {
    }
  }
}
</script>

<style scoped>
.group {
  margin-bottom: 10px;
}
.title-class {
  text-align: left;
}
</style>
