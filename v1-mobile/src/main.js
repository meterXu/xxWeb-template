import Vue from 'vue'
import './assets/css/base.less'
import 'vant/lib/index.css';
import 'amfe-flexible'
import Vant from 'vant';
import createRequest from './lib/request'
import vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import Storage from 'vue-ls';
import config from './assets/js/config'
import myMixin from './lib/mixin'
import axios from "axios";
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(vuex)
Vue.use(Storage,{
    namespace: 's2_mobile_',
    name: 'ls',
    storage: 'session'
})
Vue.mixin(myMixin)
axios.get('./config.json').then(res=>{
    Vue.prototype.$config = Object.assign(config,res.data)
    Vue.prototype.$request = createRequest(Vue.prototype.$config.baseApi)
    new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#app')
})

