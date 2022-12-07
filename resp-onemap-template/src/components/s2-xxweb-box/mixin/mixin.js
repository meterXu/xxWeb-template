export default {
    inject: ['app','cachedViews','visitedViews'],
    methods:{
        searchMenuByPath(data, path) {
            let res = null
            for (let i = 0; i < data.length; i++) {
                if (data[i].path === path) {
                    res = data[i]
                    break
                } else if (data[i].hasOwnProperty('children') && data[i].children instanceof Array) {
                    res = this.searchMenuByPath(data[i].children, path)
                    if (res) {
                        break
                    }
                }
            }
            return res
        }
    },
    created(){
        // this.$slots = this.slots
        // this.$scopedSlots = this.scopedSlots
    }
}
