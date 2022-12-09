<template>
  <NotFound :link="link"/>
</template>

<script>
export default {
  name: 'MyNotFound',
  data(){
    return {
      link:{
        home:window.location.pathname
      }
    }
  }
}
</script>

<style scoped>

</style>