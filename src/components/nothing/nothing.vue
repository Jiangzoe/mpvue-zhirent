<template>
  <div class="container">
    <image class="icon" src="/static/images/pages.svg"></image>
    <div class="tips">{{tips}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props:[
    'tips'
  ]
}
</script>

<style lang="stylus" scoped>
.container
  margin-top 80px
  text-align center
  .icon
    width 45px
    height 50px
    margin-bottom 27px
  .tips
    font-size 14px
    color #c4c8c7
</style>
