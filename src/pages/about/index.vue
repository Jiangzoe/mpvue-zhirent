<template>
  <div class="page">
    <div class="page-center">
      <image class="page-center__img" src="http://r.photo.store.qq.com/psb?/V10L6jbI20I6c0/5rxsNNTgNDvoiybBLWvlTrOqb.XdYgg*.ANEfoh.QZ0!/r/dL8AAAAAAAAA"></image>
    </div>
    <div class="page-footer">
      <image class="page-footer__img" src="http://r.photo.store.qq.com/psb?/V10L6jbI20I6c0/7XBnRHk4cq1PyZeMN1qgda2vaBdbhb40lIY7rs80z5g!/r/dOkAAAAAAAAA"></image>
    </div>
  </div>
</template>

<script>
export default {
  onLoad(){
    wx.setNavigationBarTitle({
      title: '关于职人'
    })
  }

}
</script>

<style lang="stylus" scoped>
.page
  width 100%
  height 100vh
  background-color #fff
  box-sizing border-box
  padding-top 200px
  .page-center
    .page-center__img
      width 375px
      height 81px
  .page-footer
    position absolute
    bottom 20px
    .page-footer__img
      width 375px
      height 77px
</style>

