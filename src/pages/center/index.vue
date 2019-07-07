<template>
  <div class="page">
    <div class="item">
      <div class="question">如何成为主办方？</div>
      <div class="answer">现阶段，请联系职人官方客服职酱（微信号：ziliude），提供机构名称、Logo、介绍等完整信息，即可申请开通，快速成为主办方。</div>
    </div>
    <div class="item">
      <div class="question">如何登录主办方中心？</div>
      <div class="answer">
        开通主办方权限后，请通过电脑端登录主办方中心。可以发布沙龙，管理沙龙和报名者信息。
        <div>电脑端访问入口: https:/ /run.zhirens.com</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  onLoad(){
    wx.setNavigationBarTitle({
      title: '主办方中心'
    })
  }
}
</script>

<style lang="stylus" scoped>
.page
  height 100vh
  background-color #fff
  padding 15px
  .item
    margin-bottom 25px
    .question
      font-size 16px
      color #080a50
      margin-bottom 15px
    .answer
      font-size 16px
</style>