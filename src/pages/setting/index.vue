<template>
  <div class="page">
    <div class="page-container">
      <div class="page-container__item first" @click="goAbout">
        <image class="item-icon" src="/static/images/about.svg"></image>
        <text class="item-text">关于职人</text>
        <image class="item-next" src="/static/images/next.svg"></image>
      </div>
      <div class="page-container__item" @click="goCenter">
        <image class="item-icon" src="/static/images/zhiren.png" ></image>
        <text class="item-text">主办方中心</text>
        <image class="item-next"  src="/static/images/next.svg"></image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  onLoad(){
    wx.setNavigationBarTitle({
      title: '设置'
    })
  },
  methods: {
    goAbout(){
      wx.navigateTo({
        url:'/pages/about/main'
      })
    },
    goCenter(){
      wx.navigateTo({
        url:'/pages/center/main'
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.page
  height 100vh
  background-color #f4f6f8
  padding 12px
  .page-container
    box-sizing border-box
    padding 15px
    background-color #fff
    height 115px
    .first
      border-bottom 1px dashed #d8dce1
      margin-bottom 15px
      padding-bottom 10px
    .page-container__item
      width 100%
      display flex
      position relative
      .item-icon
        width 25px
        height 25px
        border-radius 50%
        margin-right 10px
      .item-text
        font-size 16px
        line-height 30px
      .item-next
        width 12px
        height 12px
        position absolute
        top 10px
        right 0
</style>

