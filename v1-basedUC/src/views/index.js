import Analysis from './dashboard/Analysis'
import TenantFileList from './doc/TenantFileList'
import {util} from "@dpark/s2-utils";
export default util.parseRoutes([
  // 带头部和菜单的布局存放此处
  {
    path: '/{{ namespace }}/dashboard',
    name: '@getRoutesName(path)',
    component: Analysis
  },
  {
    path: '/{{ namespace }}/info',
    name: '@getRoutesName(path)',
    component: TenantFileList
  }
])
