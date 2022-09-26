const appState = {
    userInfo:null,
    headTitle:'首页'
}

const mutations = {
    setUserInfo:(state,data)=>{
        state.userInfo = data
        localStorage.setItem('userInfo',JSON.stringify(data))
    },
    setHeadTitle:(state,data)=>{
        state.headTitle = data
        localStorage.setItem('headTitle',JSON.stringify(data))
    }
}


export default {
    namespaced: false,
    state: appState,
    mutations
}
