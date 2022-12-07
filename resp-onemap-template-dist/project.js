window.project={
  "namespace": "{{namespace}}",
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
    "index": "/",
    "login": "/onemap_client/login"
  },
  "style": {
    "theme": "vue-admin",
    "color": "#1890FF",
    "layout": "sidemenu",
    "multipage": true,
    "colorWeak": false,
    "fixedHeader": false,
    "fixSiderbar": false,
    "autoHideHeader": false
  },
  "config": {
    "projectName": "{{appName}}",
    "logo": "",
    "favicon": "static/dpark/logo_sipsd_favicon.png",
    "menu": {
      "mode": "router"
    },
    "head": {
      "logo": {
        "show": true
      },
      "hamburger": true,
      "title": {
        "show": true
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
      "icon": true
    },
    "browserFilter": {}
  }
}