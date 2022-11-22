import Vue from 'vue'
import App from './App.vue'
import XXWebBox from '@dpark/s2-xxweb-box'
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store/'
import {filter,util} from '@dpark/s2-xxweb-utils'
import DoIcon from '@dpark/icon'
Vue.use(XXWebBox)
Vue.use(DoIcon)
Vue.prototype.$project = window.project
Vue.prototype.$ls = new util.ls(window.project)
filter(router,Vue.prototype.$project)
document.title = Vue.prototype.$project.config.title
document.querySelector('link[rel="icon"]').href = Vue.prototype.$project.config.favicon
Vue.use(element, {
  size: 'small',
  menuType: 'text'
})
window.vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
