<template>
  <div>
    <div class="info-desc" :class="isEllipsis ?'ellipsis':'unellipsis'">{{info}}</div>
    <div class="text-expander" @click="ellipsis" >
        <text class="text-expander__content">{{isEllipsis?'展开全部':'全部收起'}}</text>
        <image class="text-expander__icon" :src="isEllipsis?'/static/images/down.svg':'/static/images/up.svg'"></image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info:'',
      isEllipsis:true
    }
  },
  methods: {
    ellipsis(val){
      this.isEllipsis =!this.isEllipsis
      this.$emit('clickExpander')
    }
  },
  props:[
    'info'
  ]
}
</script>

<style lang="stylus" scoped>
.info-desc
  font-size 14px
  display -webkit-box
  -webkit-box-orient vertical
  text-overflow ellipsis
  overflow hidden
  line-height 26px
.ellipsis
  -webkit-line-clamp 3
.unellipsis
  -webkit-line-clamp 0
.text-expander
  margin 0 auto
  width 80px
  height 20px 
  .text-expander__content
    color #c4c8c7
    font-size 16px
  .text-expander__icon
    width 15px
    height 15px
</style>