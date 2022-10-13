import {request as requestCreate,portal} from '@dpark/s2-xxweb-utils';
import Vue from 'vue';

export function dealWithError(error){
  let data = error.response.data;
  if(typeof(data)==='string'&&data.indexOf('{')>-1){
    data = JSON.parse(data);
  }
  data.message = (data.msg||data.message)||requestCreate.getErrorText(error.response.status)
  switch (error.response.status){
  case 500:
    if (data.message === 'Token失效，请重新登录') {
      showConfirm()
    }else{
      Vue.prototype.$notify.error({title: '系统提示', message: data.message, duration: 4});
    }
    break
  case 401:{
    showConfirm()
    break
  }
  default:
    Vue.prototype.$notify.error({title: '系统提示', message: data.message, duration: 4});
    break
  }
}


function showConfirm (){
  Vue.prototype.$confirm('很抱歉，登录已过期，请重新登录', '登录已过期', {
    type:'warning',
    confirmButtonText:'重新登录',
    callback:function (action){
      if(action==='confirm'){
        util.logOut(Vue)
      }
    }
  })
}