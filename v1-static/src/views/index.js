import ReadeMe from './m1/ReadMe.vue'
import PageA from './m2/PageA.vue'
import {util} from "@dpark/s2-utils";
export default util.parseRoutes([
  // 带头部和菜单的布局存放此处
  {
    path: '/{{ namespace }}/m1/readme',
    name: '@getRoutesName(path)',
    component: ReadeMe
  },
  {
    path: '/{{ namespace }}/m2/page_a',
    name: '@getRoutesName(path)',
    component: PageA
  }
])
