const project_{{ namespace }} = {
  namespace: "{{ namespace }}",
  mainSys:true,
  index:10,
  variable: {
    development: {
      appid: "<请配置>",
      appName: "<请配置>",
      baseApi: "<请配置>",
      tokenKey:'Authorization',
      accessTokenTime: 3600 * 1000,
      sso:{
        ssoApi: null,
        ssoAuth:null,
      },
      minio:{
        uploadUrl: null,
      },
      logfv:{
        enable:false,
        console:false,
        reportUrl:'http://58.210.9.133/iplatform/logfv-server/logfv/web/upload'
      }
    },
    production: {
      appid: "<请配置>",
      appName: "<请配置>",
      baseApi: "<请配置>",
      tokenKey:'Authorization',
      accessTokenTime: 3600 * 1000,
      sso:{
        ssoApi: null,
        ssoAuth:null,
      },
      minio:{
        uploadUrl: null,
      },
      logfv:{
        enable:true,
        console:false,
        reportUrl:'http://58.210.9.133/iplatform/logfv-server/logfv/web/upload'
      }
    },
    proxy:{

    }
  },
  redirect: {
    //放开即可覆盖默认登录页面 login: '/{{ namespace }}/login',
    index: '/{{ namespace }}/m1/readme'
  },
  style: {
    theme: 'dark-vue-admin',
    color: '#1890FF',
    layout: 'sidemenu',
    multipage: true,
    colorWeak: false,
    fixedHeader: false,
    fixSiderbar: false,
    autoHideHeader: false,
  },
  config: {
    logo: "static/dpark/logo_sipsd.png",
    darkLogo: "static/dpark/logo_sipsd_white.png",
    favicon: "static/dpark/logo_sipsd_favicon.png",
    title: "{{projectName}}",
    login: {
      title: "{{projectName}}",
      desc: ""
    },
    head: {
      title: {
        desktop: "欢迎使用S2前端开发框架",
        mobile: "S2开发框架"
      },
      searchMenu: {
        show: true
      },
      helper: {
        show: true,
        href: "http://192.168.126.25/iplatform/pldoc/",
        target: "_blank"
      }
    },
    sideMenu: {
      title: "{{projectName}}"
    },
    footer: {
      links: [{
        name: "帮助",
        href: "javascript:;",
        target: "_self"
      }, {
        name: "隐私",
        href: "javascript:;",
        target: "_self"
      },
      {
        name: "条款",
        href: "javascript:;",
        target: "_self"
      }],
      copyright: {
        content: "苏州工业园园区测绘地理信息有限公司",
        year: "2020",
        href: "http://www.dpark.com.cn",
        target: "_blank"
      }
    },
    plugins: {
      changeSystem: {
        enable: false
      }
    },
    browserFilter: {
      chrome: 65,
      firefox: 53
    }
  }
}

if (!window.project) {
  window.project = {}
  window.project[project_{{ namespace }}.namespace] = project_{{ namespace }}
} else if (!window.project[project_{{ namespace }}.namespace]) {
  window.project[project_{{ namespace }}.namespace] = project_{{ namespace }}
}


export default project_{{ namespace }}
