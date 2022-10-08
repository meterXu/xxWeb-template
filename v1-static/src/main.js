import Vue from 'vue'
import Vuels from 'vue-ls'
import store from './store'
import routes,{frameRoutes} from './routes'
import project from './project'
import {portal} from '@dpark/s2-utils'
import "./assets/less/common.less";
import antd from 'ant-design-vue'
import {staticPermission} from "./api";
Vue.use(Vuels,{
    namespace: 'pro__',
    name: 'ls',
    storage: 'local',
})
portal.registerApp({routes,permission:staticPermission,store,frameRoutes,project},function(globaVue,globalRouter, globalStore){
    if(globaVue.config.errorHandler){
        let handler  = globaVue.config.errorHandler
        globaVue.config.errorHandler = function (err){
            handler(err)
        }
    }else{
        globaVue.config.errorHandler=function (err){
        }
    }
    globaVue.use(antd)
})
