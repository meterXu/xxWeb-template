window.project={
  "namespace": "onemap_client",
  "mainSys": true,
  "index": 10,
  "variable": {
    "appid": "{{appid}}",
    "datawayUrl": "http://58.210.9.133/iplatform/rsep-onemap-service/api/v1/",
    "appName": "{{appName}}",
    "tokenKey": "Authorization",
    "baseApi": "http://58.210.9.133/iplatform/gateway/admin",
    "ssoAuth": "http://58.210.9.133/iplatform/ifp-oauth2/#/newsso/login"
  },
  "redirect": {
    "404": "/onemap_client/404",
    "index": "/onemap_client/map",
    "login": "/onemap_client/login"
  },
  "style": {
    "theme": "vue-admin",
    "color": "#1890FF",
    "layout": "sidemenu",
    "multipage": true,
    "fixSideMenu": false
  },
  "config": {
    "title": "",
    "logo": "",
    "favicon": "",
    "login": {
      "title": "",
      "desc": ""
    },
    "menu": {
      "mode": "router"
    },
    "head": {
      "logo": {
        "show": false
      },
      "hamburger": true,
      "title": {
        "show": false,
        "desktop": "",
        "mobile": ""
      },
      "breadcrumb": {
        "show": true
      },
      "searchMenu": {
        "show": false
      },
      "fullscreen": {
        "show": true
      },
      "helper": {
        "show": false,
        "href": "",
        "target": "_blank"
      },
      "user": {
        "show": true,
        "username": true,
        "menu": {
          "show": true,
          "clearCache": false,
          "changePwd": false,
          "exitSystem": true
        }
      }
    },
    "sideMenu": {
      "title": "",
      "width": "200px",
      "logo": {
        "show": true
      },
      "hamburger": false,
      "user": {
        "show": false,
        "username": true,
        "tag": false,
        "menu": {
          "show": true,
          "clearCache": true,
          "changePwd": true,
          "exitSystem": true
        }
      }
    },
    "tabs": {
      "show": true,
      "icon": true
    },
    "footer": {
      "show": false,
      "links": [
        {
          "name": "帮助",
          "href": "javascript:;",
          "target": "_self"
        },
        {
          "name": "隐私",
          "href": "javascript:;",
          "target": "_self"
        },
        {
          "name": "条款",
          "href": "javascript:;",
          "target": "_self"
        }
      ],
      "copyright": {
        "content": "苏州工业园区测绘地理信息有限公司",
        "year": "2002-2017",
        "href": "http://www.dpark.com.cn",
        "target": "_blank"
      }
    },
    "browserFilter": {}
  }
}