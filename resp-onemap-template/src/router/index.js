import Vue from 'vue';
import Login from '../views/Login.vue'
import Router from 'vue-router';
import routeIndex from '../views/map/Index';
import MyNotFound from '../views/MyNotFound';
import Index from '../views/Index';
import { getSysemParam } from '../api/SystemBasic'
Vue.use(Router);

let normalRoutes = [
  {
    'path': '/onemap_client/login',
    'name': Login.name,
    'component': Login
  },
  {
    'path': '/onemap_client/404',
    'name': MyNotFound.name,
    'component': MyNotFound
  },
  {
    path: '/',
    component: Index,
    name: Index.name,
    redirect: '/onemap_client/route',
    children: [
      {
        path: '/onemap_client/route',
        name: routeIndex.name,
        component: routeIndex
      }]
  }
]

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({
      y: 0
    }),
    routes: normalRoutes
  });

const router = createRouter();

router.beforeEach((to, from, next) => {
  // 渲染系统参数配置
  getSysemParam().then(({ data }) => {
    if (data.length) {
      let systemParam = {}
      data.map(item => {
        systemParam[item.paramCode] = item.paramValue
      })
      Object.assign(Vue.prototype.$project.config, systemParam)
    }
    // 系统标题配置
    document.title = process.env.VUE_APP_appName
    // favicon配置
    document.querySelector('link[rel="icon"]').href = Vue.prototype.$project.config.favicon
    // vm.app.appConfig.config.head.title.desktop  =  12312
    next()
  }).catch(() => {
    next()
  })
  // ...
  // 返回 false 以取消导航
  // return false
})
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
