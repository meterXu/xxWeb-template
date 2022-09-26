<template>
  <div id="app" ref="app">
    <Head/>
    <div class="route-view">
      <router-view/>
    </div>
    <Foot/>
  </div>
</template>

<script>
import Head from './components/Head'
import Foot from './components/Foot'
export default {
  name: 'App',
  components: {
    Head,
    Foot,
  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{
  },
}
</script>
<style scoped>
#app {
  height: 93vh;
}
</style>
