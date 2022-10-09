import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
const app = {
  state: {
    allPerms: [],
    userInfo:{}
  },
  mutations: {
    setAllPerms(state, data){
      state.allPerms = data
      Vue.prototype.$ls.set('allPerms',JSON.stringify(data))
    },
    setUserInfo(state, data){
      state.userInfo = data
      Vue.prototype.$ls.set('userInfo',JSON.stringify(data))
    }
  },
  actions: {

  },
  getters:{
    allPerms:state=>{
      if (Vue.prototype.$ls.get('allPerms')) {
        state.allPerms = JSON.parse(Vue.prototype.$ls.get('allPerms'))
      }
      return state.allPerms
    },
    userInfo:state=>{
      if (Vue.prototype.$ls.get('userInfo')) {
        state.userInfo = JSON.parse(Vue.prototype.$ls.get('userInfo'))
      }
      return state.userInfo
    }
  }
}

export default new Vuex.Store(app)
