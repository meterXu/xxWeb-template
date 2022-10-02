import Layout from '@/page/index/'
import Wel from '@/page/wel'
import info from '@/views/admin/user/info'
export default [{
  path: '/wel',
  component: Layout,
  redirect: '/wel/index',
  children: [{
    path: 'index',
    name: '首页',
    component:Wel
  }]
}, {
  path: '/info',
  component: Layout,
  redirect: '/info/index',
  children: [{
    path: 'index',
    name: '个人信息',
    component:info
  }]
}]
