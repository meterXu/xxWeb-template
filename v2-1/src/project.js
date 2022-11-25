const project = {
  namespace: '{{ namespace }}',
  mainSys:true,
  index:10,
  variable: {
    appid: process.env.VUE_APP_appid,
    appName: process.env.VUE_APP_appName,
    baseApi: process.env.VUE_APP_baseApi,
  },
  redirect: {
    index: '/{{ namespace }}/route',
    login:'/{{ namespace }}/login',
    '404':'/{{ namespace }}/404'
  },
  style: {
    theme: 'vue-admin',
    color: '#1890FF',
    layout: 'sidemenu',
    multipage: true,
    fixedTabs: false,
    fixSideMenu: false
  },
  config: {
    logo: './static/dpark/logo_sipsd_white.png',
    darkLogo: './static/dpark/logo_sipsd_white.png',
    favicon: './static/dpark/logo_sipsd_favicon.png',
    title: '{{projectName}}',
    login: {
      title: '{{projectName}}',
      desc: ''
    },
    menu:{
      mode:'router'
    },
    head: {
      logo:{
        show: true,
      },
      hamburger:true,
      title: {
        show: true,
        desktop: '欢迎使用{{projectName}}',
        mobile: '{{projectName}}'
      },
      breadcrumb: {
        show: true,
      },
      searchMenu: {
        show: true
      },
      fullscreen: {
        show: true,
      },
      helper: {
        show: false,
        href: 'http://58.210.9.133/iplatform/geekdoc/docs/wow/wow-1delpeiiudksc',
        target: '_blank'
      },
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
    sideMenu: {
      title: '{{projectName}}',
      width: '200px',
      logo:{
        show: true,
      },
      user: {
        show: false,
        username: true,
        tag:false,
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
    footer: {
      show:true,
      links: [{
        name: '帮助',
        href: 'javascript:;',
        target: '_self'
      }, {
        name: '隐私',
        href: 'javascript:;',
        target: '_self'
      },
      {
        name: '条款',
        href: 'javascript:;',
        target: '_self'
      }],
      copyright: {
        content: '苏州工业园区测绘地理信息有限公司',
        year: '2002-2017',
        href: 'http://www.dpark.com.cn',
        target: '_blank'
      }
    },
    browserFilter: {}
  }
}

module.exports=project
