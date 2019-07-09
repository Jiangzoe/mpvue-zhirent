<template>
  <div class="page">
    <image class="icon" src="/static/images/power.svg"></image>
    <div class="title">微信授权申请</div>
    <div class="tips">
      职人是一个职场活动社交平台。小程序需要获取你的公开信息（昵称、头像等），才能正常使用
    </div>
    <button class="authorize" open-type="getUserInfo" @getuserinfo="getUserInfo">同意授权</button>
  </div>
</template>

<script>
export default {
  onLoad(){
    wx.setNavigationBarTitle({
      title: '授权'
    })
  },
  methods: {
    getUserInfo(){
      wx.getSetting({
        success:(res) => {
          if(res.authSetting['scope.userInfo']){
            wx.showLoading({
              title:'加载中'
            })
            wx.reLaunch({
              url:'/pages/salon/main'
            })
            wx.hideLoading()
          }
        }
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.page
  height 100vh
  background-color #f4f6f8
  text-align center
  padding 0 45px
  .icon
    width 50px
    height 50px
    margin-top 60px
  .title
    font-size 16px
    margin-bottom 25px
  .tips
    font-size 16px
    margin-bottom 40px
  .authorize
    width 280px
    height 50px
    background-color #51aa37
    color #fff
</style>
