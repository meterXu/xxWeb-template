const project = {
  namespace: 'v2x2',
  mainSys:true,
  index:10,
  variable: {
    appid: process.env.VUE_APP_appid,
    appName: process.env.VUE_APP_appName,
    tokenKey: process.env.VUE_APP_tokenKey,
    baseApi: process.env.VUE_APP_baseApi,
    ssoApi: process.env.VUE_APP_ssoApi,
    ssoAuth: process.env.VUE_APP_ssoAuth
  },
  redirect: {
    index: '/oauth2_gateway/route',
    login:'/oauth2_gateway/login',
    '404':'/oauth2_gateway/404'
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
    logo: './static/dpark/logo_sipsd_white.png',
    darkLogo: './static/dpark/logo_sipsd_white.png',
    favicon: './static/dpark/logo_sipsd_favicon.png',
    title: '{{projectName}}',
    login: {
      title: '{{projectName}}',
      desc: ''
    },
    head: {
      logo:{
        show: true,
      },
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
      title: '网关管理',
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
