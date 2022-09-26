<template>
  <div class="index-list">
    <van-grid :gutter="10" style="margin-bottom: 10px">
      <van-grid-item v-for="item in items" :key="item.id" :icon="item.icon" :text="item.content" />
    </van-grid>
    <van-grid :gutter="10" :border="false" :column-num="2">
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-4.jpg" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name: "Index",
  components: {
  },
  computed:{
    ...mapGetters(['userInfo']),
  },
  data(){
    return {
      items:[{
        id: 0,
        content: "图片",
        icon: "photo-o"
      },{
        id: 1,
        content: "购物",
        icon: "shop-o"
      },{
        id: 2,
        content: "邮件",
        icon: "envelop-o"
      },{
        id: 3,
        content: "查询",
        icon: "search"
      },{
        id: 4,
        content: "记录",
        icon: "records"
      },{
        id: 5,
        content: "钱包",
        icon: "pending-payment"
      },{
        id: 6,
        content: "卡包",
        icon: "idcard"
      },{
        id: 7,
        content: "收藏",
        icon: "star-o"
      }]
    }
  },
  methods:{
  }
}
</script>

<style scoped>

</style>
