import Layout from '@/page/index/'
import Login from '@/page/login/index'
import Lock from '@/page/lock/index'
import FourFour from '@/components/error-page/404'
import FourThree from '@/components/error-page/403'
import Error from '@/components/error-page/500'
import Iframe from '@/components/iframe/main'

export default [
  {
    path: '/login',
    name: '登录页',
    component: Login,
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/lock',
    name: '锁屏页',
    component: Lock,
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/404',
    component: FourFour,
    name: '404',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }

  },
  {
    path: '/403',
    component: FourThree,
    name: '403',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/500',
    component: Error,
    name: '500',
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false
    }
  },
  {
    path: '/',
    name: '主页',
    redirect: '/wel'
  },
  {
    path: '/myiframe',
    component: Layout,
    redirect: '/myiframe',
    children: [{
      path: ':routerPath',
      name: 'iframe',
      component:Iframe,
      props: true
    }]
  },
  {
    path: '*',
    redirect: '/404'
  }
]
