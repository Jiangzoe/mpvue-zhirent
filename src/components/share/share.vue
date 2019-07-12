<template>
  <div class="container">
    <div class="tips" >分享该沙龙</div>
    <button plain="true" open-type="share" class="type">分享给好友或群</button>
    <button plain="true" class="type" @click="save">保存沙龙海报</button>
    <div class="cancel" @click="cancel">取消</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      share:false
    }
  },
  methods: {
    cancel(){
      this.$emit('cancel',this.share)
    },
    save(){
      wx.showToast({
        icon:'none',
        title:'暂不支持'
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.container
  width 360px
  height 210px
  background-color #fff
  border-radius 10px
  box-shadow 0 0 2px #000
  position fixed
  left 7px
  bottom 20px
  box-sizing border-box
  padding 14px 14px 0
  text-align center
  z-index 999
  .tips
    width 100%
    font-size 14px
    color #a0a49f
    margin-bottom 20px
  .type
    font-size 20px
    color #224fa4
    background-color #fff
    border none
    font-weight bold
    border 0
    margin-bottom 10px
  .cancel
    width 100%
    font-size 16px
    font-weight bold
</style>
