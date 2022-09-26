import Vue from 'vue'
import Vuels from 'vue-ls'
import store from './store'
import routes,{frameRoutes} from './routes'
import project from './project'
import {portal} from '@dpark/s2-utils'
import {queryPermissionsByUser} from './api'
import JDictSelectTag from './components/dict'
import "./assets/less/common.less";
import antd from 'ant-design-vue'
Vue.use(Vuels,{
    namespace: 'pro__',
    name: 'ls',
    storage: 'local',
})
portal.registerApp({routes,permission:queryPermissionsByUser,store,frameRoutes,project},function(globaVue,globalRouter, globalStore){
    if(globaVue.config.errorHandler){
        let _handler  = globaVue.config.errorHandler
        globaVue.config.errorHandler = function (err){
            console.error(err)
            _handler(err)
        }
    }else{
        globaVue.config.errorHandler=function (err){
            console.error(err)
        }
    }
    globaVue.use(antd)
    globaVue.use(JDictSelectTag)
})
