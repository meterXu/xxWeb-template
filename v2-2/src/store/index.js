import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
const app = {
  state: {
    allPerms: []
  },
  mutations: {
    setAllPerms(state, data){
      state.allPerms = data
      Vue.prototype.$ls.set('allPerms',JSON.stringify(data))
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
    }
  }
}

export default new Vuex.Store(app)
