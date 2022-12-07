
<template>
  <div @click='goDetail'>
    <slot />
  </div>
</template>

<script>
import { isExternal } from '../../utils';

export default {
  name: 'ItemLink',
  props: {
    to: {
      type: Object,
      required: true,
      default: () => {
        return {
          meta: {},
          path: '/'
        }
      }
    },
  },
  methods: {
    goDetail() {
      switch (this.to.meta.category) {
      case 'dockLeft':
        // App.pubsub.publish('open-left-search', {
        //   title: node.menuName,
        //   name: node.menuCode,
        //   src: node.menuUrl
        // });
        break;
      case 'float':
      case 'event':
        if (this.to.path === '') {
          console.log('事件缺失');
          return false;
        }
        eval(this.to.path);
        break;
      case 'tab':
        // this.$store.commit('addTab', {
        //   name: node.menuCode,
        //   label: node.menuName,
        //   src: node.menuUrl
        // });
        break;
      case 'link':
        window.open(this.to.path);
        break;
      case 'router':
        this.$router.push(this.to.path);
        break;
      }
    },
    linkProps(to) {
      if (isExternal(to)) {
        return {
          is: 'a',
          class: 'box-item-link',
          href: to,
          target: '_blank',
        };
      }
      return {
        is: 'router-link',
        class: 'box-item-link',
        to: to,
      };
    },
  },
};
</script>
