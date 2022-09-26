import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import List from '../views/List'
import Setting from "../views/Setting";
Vue.use(Router)

const router =  new Router({
    model: 'hash',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/List',
            name: 'index',
            component: List,
        },
        {
            path: '/Setting',
            name: 'index',
            component: Setting,
        }
    ]
})

export default router
