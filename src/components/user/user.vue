<template>
  <div class="header">
    <div class="user-avatar">
      <open-data class="thumb" type="userAvatarUrl"></open-data>
    </div>
    <div class="service">
      <image class="right-icon" src="/static/images/servicer.svg" ></image>
      <image class="right-icon" src="/static/images/set.svg"></image>
    </div>
    <div class="user-name">
      <div class="userName-btn">
          <open-data class="nickname" lang="zh_CN" type="userNickName"></open-data>
        <div class="addInfo">
          <image class="icon" src="/static/images/next.svg"></image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 120px
  background-color #fff
  .user-avatar
    margin 20px auto 10px
    width 50px
    height 50px
    padding 3px
    border-radius 50%
    border 1px solid #d9dde1
    .thumb
      width 100%
      height 100%
      border-radius 50%
      overflow hidden
      display flex
  .service
    position absolute
    top 20px
    right 0
    .right-icon
      width 20px
      height 20px
      margin-right 20px
  .user-name
    margin-bottom 40px
    margin-left 25px
    display flex
    font-size 18px
    line-height 18px
    font-weight bold
    .userName-btn
      display flex
      margin 0 auto
    .addInfo
      margin-left 10px
      margin-top 2px
      .icon
        width 15px
        height 15px
</style>

