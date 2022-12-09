import Vue from 'vue'
import App from './App.vue'
import XXWebBox from '@dpark/s2-xxweb-box'
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store/'
import {filter,util,types} from '@dpark/s2-xxweb-utils'
import DoIcon from '@dpark/icon'
import MapmostAdapter from '@dpark/mapmost-adapter/src';
import {getSysemParam} from './api/SystemBasic'

Vue.use(MapmostAdapter);
Vue.use(XXWebBox)
Vue.use(DoIcon)
Vue.prototype.$ls = new util.ls(window.project)
const query = util.getQuery()||{}
const token = query.Authorization||Vue.prototype.$ls.get(types.ACCESS_TOKEN)
if(token){
  Vue.prototype.$ls.set(types.ACCESS_TOKEN,token)
  getSysemParam().then(res=>{
    res.data.forEach(r=>{
      let tmp = null
      r.paramCode.split('.').forEach(p=>{
        if(tmp){
          if(tmp[p] instanceof Object){
            tmp = tmp[p]
          }else{
            tmp[p] = r.paramValue
          }
        }else{
          if(window.project.config[p] instanceof Object){
            tmp =  window.project.config[p]
          }else {
            window.project.config[p] = r.paramValue
          }
        }
      })
    })
    document.title = window.project.config.title
    document.querySelector('link[rel="icon"]').href = window.project.config.favicon
    Vue.prototype.$project = window.project
    filter(router, Vue.prototype.$project)
    Vue.use(element, {
      size: 'small',
      menuType: 'text'
    })
    window.vue = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')

  })
}else{
  util.redirectSsoLogin(window.project,null)
}
