import Vue from 'vue';
import Login from '../views/Login.vue'
import Router from 'vue-router';
import routeIndex from '../views/route/Index';
import MyNotFound from '../views/MyNotFound';
import Index from '../views/Index';
Vue.use(Router);

let normalRoutes = [
  {
    'path': '/{{ namespace }}/login',
    'name': Login.name,
    'component': Login
  },
  {
    'path': '/{{ namespace }}/404',
    'name': MyNotFound.name,
    'component': MyNotFound
  },
  {
    path: '/',
    component: Index,
    name: Index.name,
    redirect:'/{{ namespace }}/route',
    children:[
      {
        path: '/{{ namespace }}/route',
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
