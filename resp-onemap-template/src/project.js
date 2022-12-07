const project = {
  namespace: '{{namespace}}',
  mainSys: true,
  index: 10,
  variable: {
    appid: process.env.VUE_APP_appid,
    datawayUrl: process.env.VUE_APP_datawayUrl,
    appName: process.env.VUE_APP_appName,
    tokenKey: process.env.VUE_APP_tokenKey,
    baseApi: process.env.VUE_APP_baseApi,
    ssoAuth: process.env.VUE_APP_ssoAuth
  },
  redirect: {
    index: '/',
    login: '/onemap_client/login',
    '404': '/onemap_client/404'
  },
  style: {
    theme: 'vue-admin',
    color: '#1890FF',
    layout: 'sidemenu',
    multipage: true,
    colorWeak: false,
    fixedHeader: false,
    fixSiderbar: false,
    autoHideHeader: false,
  },
  config: {
    // 系统名称
    projectName: process.env.VUE_APP_appName,
    // logo路径或地址
    logo: '',
    // favicon路径或地址
    favicon: '',
    // login: {
    //   title: 'rsep_onemap_client',
    //   desc: ''
    // },
    // 只控制显隐
    menu:{
      mode:'router'
    },
    head: {
      // 左侧logo
      logo: {
        show: true,
      },
      hamburger:true,
      // layout顶部title
      title: {
        show: true
      },
      // 面包屑
      breadcrumb: {
        show: true,
      },
      // 搜索
      searchMenu: {
        show: false
      },
      // 全屏
      fullscreen: {
        show: true,
      },
      // helper: {
      //   show: false,
      //   href: 'http://58.210.9.133/iplatform/geekdoc/docs/wow/wow-1delpeiiudksc',
      //   target: '_blank'
      // },
      user: {
        show: true,
        username: true,
        menu: {
          show: true,
          clearCache: false,
          changePwd: false,
          exitSystem: true
        }
      }
    },
    // 左侧sidebar显隐
    sideMenu: {
      width: '200px',
      logo: {
        show: true,
      },
      hamburger:false,
      user: {
        show: false,
        username: true,
        tag: false,
        menu: {
          show: true,
          clearCache: true,
          changePwd: true,
          exitSystem: true
        }
      }
    },
    tabs: {
      icon: true,
    },
    // footer: {
    //   show: false,
    //   links: [{
    //     name: '帮助',
    //     href: 'javascript:;',
    //     target: '_self'
    //   }, {
    //     name: '隐私',
    //     href: 'javascript:;',
    //     target: '_self'
    //   },
    //   {
    //     name: '条款',
    //     href: 'javascript:;',
    //     target: '_self'
    //   }],
    //   copyright: {
    //     content: '苏州工业园区测绘地理信息有限公司',
    //     year: '2002-2017',
    //     href: 'http://www.dpark.com.cn',
    //     target: '_blank'
    //   }
    // },
    browserFilter: {}
  }
}

module.exports = project
