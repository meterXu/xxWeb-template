const getters = {
    userInfo:state=>{
        state.app.userInfo = state.app.userInfo||JSON.parse(localStorage.getItem('userInfo'))
        return state.app.userInfo
    },
    showHeadTitle:state=>{
        state.app.headTitle = JSON.parse(localStorage.getItem('headTitle'))||state.app.headTitle
        return state.app.headTitle
    },
}
export default getters
