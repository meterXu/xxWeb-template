<template>
  <Main class="layout-main">
    <TagsView v-if="app.appConfig.style.multipage" @refresh="refresh"></TagsView>
    <AppMain ref="appMain"></AppMain>
  </Main>
</template>

<script>
import {Tabs,TabPane,Card,Button,Row,Col} from 'element-ui'
import TagsView from './TagsView.vue';
import AppMain from './AppMain.vue';
import mixin from '../../../mixin/mixin';
export default {
  name: 'TabLayout',
  mixins:[mixin],
  components:{
    AppMain,
    TagsView
  },
  methods: {
    refresh(){
      this.$refs.appMain.refresh()
    }
  }
}
</script>

<style scoped>

</style>
