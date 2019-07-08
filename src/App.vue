<script>
export default {
  data() {
    return {
      userInfo:{}
    }
  },
  created() {
    
  },
  onLaunch(){
    wx.getSetting({
      success(res){
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: function(res) {
              // console.log(res.userInfo)
            }
          })
        }else{
          // 未授权，跳转到授权页面
          wx.reLaunch({
            url: '/pages/authorize/main',
          })
        }
      }
    })
  }
}
</script>

<style lang="stylus" scoped>

</style>
