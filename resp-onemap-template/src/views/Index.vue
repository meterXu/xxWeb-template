<template>
  <XXWebBox v-if="menu.length > 0" :appConfig="project" :permission="menu" @dropdownMenuClick="dropdownMenuClick">
    <template v-slot:head-user-userName>
      {{ realname }}
    </template>
  </XXWebBox>
</template >

<script>
import { types, util } from '@dpark/s2-xxweb-utils';
import { queryPermissionsByUser } from '../api';
import { getMenu } from '../api/SystemBasic';

export default {
  name: 'Index',
  data() {
    return {
      project: this.$project,
      menu: [],
    };
  },
  computed: {
    realname() {
      let userinfo = JSON.parse(this.$ls.get(types.USER_INFO));
      return userinfo.realname;
    },
  },
  methods: {
    dropdownMenuClick(command) {
      switch (command) {
      case 'exitSystem': {
        util.logOut(this,this.$project)
      }
      }
    },
    transRoute(route, permission, pushChild) {
      route.map((val) => {
        let item = {
          meta: {
            menuType: val.menuType,
            category: val.category,
            title: val.menuName,
          },
          path: val.menuUrl || '/'
        };
        try {
          item.meta.icon = JSON.parse(JSON.parse(val.cssStyle).icon);
        } catch (e) {
          item.meta.icon = JSON.parse(val.cssStyle).icon;
        }
        if (val.children && val.children.length) {
          item.children = []
          this.transRoute(
            val.children,
            item,
            true
          );
        }
        if (pushChild) {
          permission.children.push(item)
        } else {
          permission.push(item);
        }
      });
    },
  },
  created() {
    getMenu().then(({ data }) => {
      this.transRoute(data, this.menu);
    });
    // queryPermissionsByUser().then((res) => {
    //   this.menu = res.menu;
    //   console.log(this.menu)
    //   this.$store.commit('setAllPerms', res.allPerms);
    // });
  },
};
</script>

<style scoped>

</style>
