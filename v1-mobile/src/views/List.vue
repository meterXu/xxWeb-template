<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    class="list"
  >
    <van-cell is-link v-for="item in items" :key="item.id">
      <!-- 使用 title 插槽来自定义标题 -->
      <template >
        <div class="list-cell">
          <img class="list-cell-img" src="../assets/img/dataAnalysis.png" alt="">
          <div>
            <div class="custom-title">{{item.listName}}</div>
            <div class="custom-title">{{item.content}}</div>
          </div>
        </div>
      </template>
    </van-cell>
  </van-list>
</template>

<script>
export default {

  name: 'List',
  components: {

  },
  data(){
    return {
      items: [
        {
          id: 0,
          listName: '数据分析',
          content: '暂无介绍'
        },
        {
          id: 1,
          listName: '数据分析',
          content: '暂无介绍'
        },
        {
          id: 2,
          listName: '数据分析',
          content: '暂无介绍'
        },
        {
          id: 3,
          listName: '数据分析',
          content: '暂无介绍'
        }],
      finished:false,
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.list-cell {
  display: flex;
  justify-content: start;
  align-items: center;
}
.list-cell-img {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}
</style>
