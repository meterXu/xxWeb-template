<template>
  <div></div>
</template>

<script>
import {util} from '@dpark/s2-xxweb-utils'

export default {
  name:'login',
  data(){
    return{
    }
  },
  mounted() {
    util.redirectSsoLogin(this.$project,this)
  }
}
</script>

<style>

</style>
