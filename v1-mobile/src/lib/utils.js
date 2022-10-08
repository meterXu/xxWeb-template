import router from '../router/index';
import {Dialog, Toast} from 'vant';

export function warn(msg){
  Toast.clear()
  const name = router.app.$route.name
  Dialog.alert({
    title:'警告',
    message: msg,
    theme: 'round-button',
    confirmButtonText:(name==='sharePage'||name==='index'||name==='login')?'确定':'回到首页'
  }).then(()=>{
    if(name!=='sharePage'&&name!=='index'&&name!=='login'){
      router.replace({name:'index'})
    }
  })
}

/**
 * 获取url中的参数
 * @param variable
 * @param name
 * @returns {String | null|string}
 */
export function getQueryVariable(variable) {
  let query = ''
  if (window.location.search) {
    query = window.location.search.substring(1)
  } else {
    const urlSection = window.location.href.split('?')
    query = urlSection.length >= 2 ? urlSection[1] : null
  }
  if (query) {
    let vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=')
      if (pair[0] === variable) { return decodeURIComponent(pair[1]) }
    }
  }
  return null
}
