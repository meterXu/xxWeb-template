export default {
  data(){
    return {
      searchForm: {}, //搜索
      tableData: [], //分页查询结果
      form: {}, //表集合
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 10, // 每页显示多少条
      },
      tableLoading: false,
    }
  },
  methods:{
    indexMethod(index) {
      return index+1
    },
    getList(){
    },
    handleCurrentChange(val) {
      this.page.currentPage = val
      this.getList()
    },
    handleSizeChange(val) {
      this.page.pageSize = val
      this.getList()
    },
    onSearch() {
      this.page.currentPage = 1
      this.getList()
    },
    onReset() {
      Object.keys(this.searchForm).forEach(key=>{
        this.searchForm[key] = null
      })
      this.page.currentPage = 1
      this.getList()
    }
  }
}