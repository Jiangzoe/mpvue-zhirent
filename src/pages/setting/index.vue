<template>
  <div class="page">
    <div class="container">
      <div class="item first" @click="goAbout">
        <image class="icon" src="/static/images/about.svg"></image>
        <text class="text">关于职人</text>
        <image class="next" src="/static/images/next.svg"></image>
      </div>
      <div class="item" @click="goCenter">
        <image class="icon" src="/static/images/zhiren.png" ></image>
        <text class="text">主办方中心</text>
        <image class="next"  src="/static/images/next.svg"></image>
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
  .container
    box-sizing border-box
    padding 15px
    background-color #fff
    height 115px
    .first
      border-bottom 1px dashed #d8dce1
      margin-bottom 15px
      padding-bottom 10px
    .item
      width 100%
      display flex
      position relative
      .icon
        width 25px
        height 25px
        border-radius 50%
        margin-right 10px
      .text
        font-size 16px
        line-height 30px
      .next
        width 12px
        height 12px
        position absolute
        top 10px
        right 0
</style>

