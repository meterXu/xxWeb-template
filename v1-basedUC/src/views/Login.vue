<template>
  <div></div>
</template>

<script>
import {util} from '@dpark/s2-utils'
export default {
  name:'login',
  mounted(){
    util.redirectSsoLogin(this.$project_{{ namespace }},this)
  }
}
</script>

<style>

</style>
