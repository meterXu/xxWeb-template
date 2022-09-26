const project = {
  namespace: 'oauth2_gateway',
  mainSys:true,
  index:10,
  variable: {
    appid: process.env.VUE_APP_appid,
    appName: process.env.VUE_APP_appName,
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
    logo: './static/dpark/logo_sipsd.png',
    darkLogo: './static/dpark/logo_sipsd_white.png',
    favicon: './static/dpark/logo_sipsd_favicon.png',
    title: '网关管理',
    login: {
      'title': '网关管理',
      'desc': ''
    },
    head: {
      logo:{
        show: true,
      },
      title: {
        show: true,
        'desktop': '欢迎使用网关管理',
        'mobile': '网关管理'
      },
      breadcrumb: {
        show: true,
      },
      searchMenu: {
        'show': true
      },
      fullscreen: {
        show: true,
      },
      helper: {
        'show': false,
        'href': 'http://192.168.126.25/iplatform/pldoc/',
        'target': '_blank'
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
      'links': [{
        'name': '帮助',
        'href': 'javascript:;',
        'target': '_self'
      }, {
        'name': '隐私',
        'href': 'javascript:;',
        'target': '_self'
      },
      {
        'name': '条款',
        'href': 'javascript:;',
        'target': '_self'
      }],
      'copyright': {
        'content': '苏州工业园园区测绘地理信息有限公司',
        'year': '2020',
        'href': 'http://www.dpark.com.cn',
        'target': '_blank'
      }
    },
    'plugins': {
      'changeSystem': {
        'enable': true
      }
    },
    'browserFilter': {
      'chrome': 65,
      'firefox': 53
    }
  }
}

module.exports=project
