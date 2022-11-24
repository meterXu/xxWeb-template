import {request as requestCreate,util} from '@dpark/s2-xxweb-utils';
import Vue from 'vue';

export function dealWithError(error){
  let data = error.response?error.response.data:error;
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
  if(error.response){
    switch (error.response.status){
    case 500:
      if (data.message === 'Token失效，请重新登录') {
        showConfirm()
      }else{
        Vue.prototype.$message({showClose: true,  type: 'error', message: data.message});
      }
      break
    case 401:{
      util.logOut(window.vue,window.project)
      break
    }
    default:
      Vue.prototype.$message({showClose: true,  type: 'error', message: data.message});
      break
    }
  }else{
    Vue.prototype.$message({showClose: true,  type: 'error', message: data.message});
  }
}


function showConfirm (){
  Vue.prototype.$confirm('很抱歉，登录已过期，请重新登录', '登录已过期', {
    type:'warning',
    confirmButtonText:'重新登录',
    callback:function (action){
      if(action==='confirm'){
        util.logOut(window.vue,window.project)
      }
    }
  })
}