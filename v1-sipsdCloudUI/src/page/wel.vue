<template>
  <div>
    <div class="wel__header">
      <div class="wel__info">
        <img
          id="thumbnail"
          :src="userInfo.avatar"
          class="top-bar__img">
        <!--        <img :src="userInfo.avatar"-->
        <!--             alt=""-->
        <!--             class="wel__info-img">-->
        <div class="wel__info-content">
          <div class="wel__info-title">
            ${{ this.wel.info }}
          </div>
          <div class="wel__info-subtitle">
            ${{ this.wel.dept }}
          </div>
        </div>
      </div>
      <div class="wel__extra">
        <div class="wel__extra-item">
          <p class="wel__extra-title">
            ${{ this.wel.count }}
          </p>
          <p class="wel__extra-subtitle">
            56
          </p>
        </div>
        <div class="wel__extra-item">
          <p class="wel__extra-title">
            ${{ this.wel.team }}
          </p>
          <p class="wel__extra-subtitle">
            8 <span>/ 24</span>
          </p>
        </div>
        <div class="wel__extra-item">
          <p class="wel__extra-title">
            ${{ this.wel.project }}
          </p>
          <p class="wel__extra-subtitle">
            2,223
          </p>
        </div>
      </div>
    </div>
    <basic-container>
      <avue-data-box :option="option1"></avue-data-box>
    </basic-container>

    <el-row :span="24">
      <el-col :span="18">
        <basic-container>
          <avue-data-progress
            :option="option3"
            style="margin-bottom:35px"></avue-data-progress>
          <avue-data-tabs :option="option"></avue-data-tabs>
        </basic-container>
      </el-col>
      <el-col :span="6">
        <basic-container>
          <avue-data-icons :option="option2"></avue-data-icons>
        </basic-container>
      </el-col>
    </el-row>
    <basic-container>
      <avue-crud
        :option="option4"
        :data="data">
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { handleImg } from '@/util/util'
export default {
  name: 'wel',
  data() {
    return {
      wel: {
        info: '早安，Sipsd Pro 快速开发框架一款超乎你想象的框架！',
        dept: '我是Sipsd团队下的一个部门-哈皮部门-哈皮职位',
        team: '团队内排名',
        project: '项目访问',
        count: '项目数',
        data: {
          subtitle: '实时',
          column1: '分类统计',
          column2: '附件统计',
          column3: '文章统计',
          key1: '分',
          key2: '附',
          key3: '评',
          text1: '当前分类总记录数',
          text2: '当前上传的附件数',
          text3: '评论次数'
        },
        data2: {
          column1: '今日注册',
          column2: '今日登录',
          column3: '今日订阅',
          column4: '今日评论'
        },
        data3: {
          column1: '转化率（日同比 28%）',
          column2: '签到率（日同比 11%）',
          column3: '签到率（日同比 11%）'
        },
        data4: {
          column1: '错误日志',
          column2: '数据展示',
          column3: '权限管理',
          column4: '用户管理'
        },
        table: {
          rw: '工作任务',
          nr: '工作内容',
          sj: '工作时间'
        }
      },
      data: [
        {
          rw: '这是一条工作任务',
          nr: '这是一条很长很长很长很长很长很长很长很长很长的工作内容',
          sj: '2019-01-01'
        },
        {
          rw: '这是一条工作任务',
          nr: '这是一条很长很长很长很长很长很长很长很长很长的工作内容',
          sj: '2019-01-01'
        },
        {
          rw: '这是一条工作任务',
          nr: '这是一条很长很长很长很长很长很长很长很长很长的工作内容',
          sj: '2019-01-01'
        },
        {
          rw: '这是一条工作任务',
          nr: '这是一条很长很长很长很长很长很长很长很长很长的工作内容',
          sj: '2019-01-01'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    option1() {
      return {
        span: 6,
        data: [
          {
            title: this.wel.data4.column1,
            count: 12332,
            icon: 'el-icon-warning',
            color: 'rgb(49, 180, 141)',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            title: this.wel.data4.column2,
            count: 33,
            icon: 'el-icon-view',
            color: 'rgb(56, 161, 242)',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            title: this.wel.data4.column3,
            count: 2223,
            icon: 'el-icon-setting',
            color: 'rgb(117, 56, 199)',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            title: this.wel.data4.column4,
            count: 2223,
            icon: 'el-icon-setting',
            color: 'rgb(230, 71, 88)',
            href: 'https://avuejs.com',
            target: '_blank'
          }
        ]
      }
    },
    option3() {
      return {
        span: 8,
        data: [
          {
            title: this.wel.data3.column1,
            color: 'rgb(178, 159, 255)',
            count: 32,
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            title: this.wel.data3.column2,
            color: 'rgb(230, 71, 88)',
            count: 32,
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            title: this.wel.data3.column3,
            color: 'rgb(230, 71, 88)',
            count: 32,
            href: 'https://avuejs.com',
            target: '_blank'
          }
        ]
      }
    },
    option2() {
      return {
        span: 12,
        data: [
          {
            title: this.wel.data2.column1,
            count: 12678,
            icon: 'el-icon-tickets',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            title: this.wel.data2.column2,
            count: 22139,
            icon: 'el-icon-success',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            title: this.wel.data2.column3,
            count: 35623,
            icon: 'el-icon-info',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            title: this.wel.data2.column4,
            count: 16826,
            icon: 'el-icon-message',
            href: 'https://avuejs.com',
            target: '_blank'
          }
        ]
      }
    },
    option() {
      return {
        span: 8,
        data: [
          {
            title: this.wel.data.column1,
            subtitle: this .data.subtitle,
            count: 7993,
            allcount: 10222,
            text: this.data.text1,
            color: 'rgb(27, 201, 142)',
            key: this.data.key1
          },
          {
            title: this.data.column2,
            subtitle: this.data.subtitle,
            count: 3112,
            allcount: 10222,
            text: this.data.text2,
            color: 'rgb(230, 71, 88)',
            key: this.data.key2
          },
          {
            title: this.data.column3,
            subtitle: this.data.subtitle,
            count: 908,
            allcount: 10222,
            text: this.data.text3,
            color: 'rgb(56, 161, 242)',
            key: this.data.key3
          }
        ]
      }
    },
    option4() {
      return {
        index: true,
        column: [
          {
            label: this.wel.table.rw,
            prop: 'rw'
          },
          {
            width: 500,
            label: this.wel.table.nr,
            prop: 'nr',
            overHidden: true
          },
          {
            label: this.wel.table.sj,
            prop: 'sj'
          }
        ]
      }
    }
  },
  created() {
    //handleImg(this.userInfo.avatar, 'thumbnail')
  },
  methods: {}
}
</script>

<style scoped="scoped" lang="scss">
.wel {
  &__header {
    padding: 25px 40px;
    border-bottom: 1px solid #e8e8e8;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__info {
    display: flex;
    align-items: center;
    &-img {
      border-radius: 72px;
      display: block;
      width: 72px;
      height: 72px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    &-content {
      position: relative;
      margin-left: 24px;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
    }
    &-title {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 12px;
    }
    &-subtitle {
      position: relative;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
      line-height: 22px;
    }
  }
  &__extra {
    &-item {
      position: relative;
      padding: 0 32px;
      display: inline-block;
      &:last-child {
        &::after {
          display: none;
        }
      }
      &:after {
        background-color: #e8e8e8;
        position: absolute;
        top: 30px;
        right: 0;
        width: 1px;
        height: 40px;
        content: "";
      }
    }
    &-title {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 4px;
    }
    &-subtitle {
      color: rgba(0, 0, 0, 0.85);
      font-size: 30px;
      line-height: 38px;
      margin: 0;
      span {
        color: rgba(0, 0, 0, 0.45);
        font-size: 20px;
      }
    }
  }
}
</style>
