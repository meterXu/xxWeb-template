# xxweb-box

![xxweb-box](http://img.xdo.icu/QQ%E6%88%AA%E5%9B%BE20220712174214.jpg)

## 依赖组件
* vue-router

## 使用
```js
import router from "./router/filter.js"
import XXWebBox from 'xxweb-box'
Vue.use(XXWebBox)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
```

```js
// ./router/filter.js
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: HelloWorld.name,
            component: HelloWorld,
            props:true
        }
    ]
})
```

```vue
<!-- App.vue -->
  <div id="app">
    <XXWebBox :appConfig="project" :permission="permission"></XXWebBox>
  </div>
<script>
import permission from "./permission";
export default {
  name: 'App',
  data(){
    return {
      project:this.$project,
      permission:permission
    }
  }
}
</script>
```

```js
// permission.js
export default [
    {
        path: '/',
        meta: { title: 'helloWorld', icon: 'el-icon-folder-opened' },
    }
]
```

```js
// project.js
export default {
    namespace: "one-map",
    mainSys: true,
    index: 10,
    redirect: {
        index: '/',
        login: '/login',
        "404": '/404'
    },
    style: {
        theme: 'default',
        color: '#1890FF',
        layout: 'sidemenu',
        multipage: true,
        colorWeak: false,
        fixedHeader: false,
        fixSiderbar: false,
        autoHideHeader: false,
    },
    config: {
        logo: require('./assets/logo.png'),
        title: "helloWorld",
        login: {
            title: "helloWorld",
            desc: ""
        },
        head: {
            logo:{
                show: true,
            },
            title: {
                show: true,
                desktop: "",
                mobile: ""
            },
            breadcrumb: {
                show: true,
            },
            searchMenu: {
                show: true
            },
            helper: {
                show: false,
                href: "javascript:;",
                target: "_blank"
            },
            fullscreen: {
                show: true,
            },
            user: {
                show: true,
                username: true,
                menu: {
                    show: true,
                    clearCache: true,
                    changePwd: true,
                    exitSystem: true
                }
            }
        },
        sideMenu: {
            title: "helloWorld",
            width: '200px',
            logo:{
                show: true,
            },
            user: {
                show: false,
                username: true,
                tag:true,
                menu: {
                    show: true,
                    clearCache: true,
                    changePwd: true,
                    exitSystem: true
                }
            }
        },
        tabs: {
            icon: false,
        },
        footer: {
            show: true,
            links: [],
            copyright: {
                content: "xxweb-box",
                year: "2022",
                href: "https://www.npmjs.com/package/xxweb-box",
                target: "_blank"
            }
        },
        plugins: {}
    }
}


```

## 插槽


### side
布局左边内容

|参数|内容|
|---|---|
|data|{isCollapse,permission}|

### side-logo
### side-userMenu
### side-user-userName
### side-user-dropdownMenuItem
### side-user-tag
### side-user-tag-text
