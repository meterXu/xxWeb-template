<template>
  <div class="xxWeb">
    <div class="not-found-dark">
      <div class="not-found-left">
        <div class="code-dark">404</div>
<!--        <div class="info-top">Something is missing!</div>-->
        <div class="info-dark">The page you are looking for does not exist, had it's name changed or is temporarilly unavailable.</div>
        <span class="help-button">Help</span>
        <span class="home-button">Home</span>
      </div>
      <div class="mark">
        <img src="../../assets/imgs/mark.png"></img>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/css/404/404dark.less'
export default {
  name: 'NotFoundDark'
}
</script>
