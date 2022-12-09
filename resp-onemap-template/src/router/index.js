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
    redirect: '/onemap_client/map',
    children: [
      {
        path: '/onemap_client/map',
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
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
