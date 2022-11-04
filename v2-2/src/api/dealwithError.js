import {request as requestCreate,util} from '@dpark/s2-xxweb-utils';
import Vue from 'vue';

export function dealWithError(error){
  if(error.response){
    let data = error.response.data;
    if(typeof(data)==='string'){
      if(data.indexOf('{')===0){
        data = JSON.parse(data);
      }else{
        data = {message:data}
      }
    }
    else {
      data.message = (data.msg||data.message)||requestCreate.getErrorText(error.response.status)
    }
    switch (error.response.status){
    case 500:
      if (data.message === 'Token失效，请重新登录') {
        showConfirm()
      }else{
        Vue.prototype.$notify.error({title: '系统提示', message: data.message});
      }
      break
    case 401:{
      showConfirm()
      break
    }
    default:
      Vue.prototype.$notify.error({title: '系统提示', message: data.message});
      break
    }
    throw Error(data.message)
  }else{
    Vue.prototype.$notify.error({title: '系统提示', message: error.message});
    throw Error(error.message)
  }
}


function showConfirm (){
  Vue.prototype.$confirm('很抱歉，登录已过期，请重新登录', '登录已过期', {
    type:'warning',
    confirmButtonText:'重新登录',
    callback:function (action){
      if(action==='confirm'){
        util.logOut(window.project)
      }
    }
  })
}