import {mapGetters} from "vuex";
import Vue from 'vue'
import {warn} from "./utils";

Vue.config.asyncErrorHandler = err => {
    Vue.prototype.$toast.clear()
    warn('抱歉，出现异常了！')
    if(process.env.NODE_ENV==='development'){
        console.error(err)
    }
};

export default {
    computed:{
        ...mapGetters(['userInfo'])
    },
    methods:{
        showWarn(msg,isback,backfx){
            try{
                this.$toast.clear()
                if(isback){
                    this.$dialog.alert({
                        message: msg,
                        confirmButtonText:'返回'
                    }).then(()=>{
                        if(backfx){
                            backfx()
                        }else{
                            this.$router.back()
                        }
                    });
                }else{
                    this.$dialog.alert({
                        message: msg,
                        confirmButtonText:'确定'
                    })
                }
            }catch (err){
                this.$toast.clear()
                console.error(err)
            }
        },
    },
    beforeCreate() {
        const methods = this.$options.methods || {}
        Object.keys(methods).forEach(key => {
            let fn = methods[key]
            this.$options.methods[key] = function(...args) {
                let ret = fn.apply(this, args)
                if (ret && ret.catch) {
                    return ret.catch(Vue.config.asyncErrorHandler)
                } else { // 默认错误处理
                    return ret
                }
            }
        })
    }
}
