<template>
 <div class="card-container">
    <div class="card-content">
      <div class="card-icon">
        <image class="icon" :src="sponsor.avatar"></image>
      </div>
      <div class="card-info">
        <div class="card-title">{{sponsor.name}}</div>
        <div class="card-desc">{{sponsor.info}}</div>
      </div>
      <button class="like">关注</button>
    </div>
    <div class="card-footer">
      <div class="card-salon-num">共举办{{sponsor.salonNum}}场沙龙</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props:[
    'sponsor'
  ]
}
</script>

<style lang="stylus" scoped>
.card-container
  padding 15px
  background-color #fff
  border-bottom 1px solid #d4d8de
  margin-bottom 10px
  .card-content
    display flex
    padding-bottom 15px
    border-bottom 1px dashed #d4d8de
    .card-icon
      margin-right 5px
      .icon
        width 50px
        height 50px
        border-radius 50%
    .card-info
      width 200px
      .card-title
        font-size 16px
        font-weight bold
        margin-bottom 10px
      .card-desc
        font-size 14px
        overflow hidden
        text-overflow:ellipsis;
        white-space: nowrap;
    .like
      width 80px
      height 40px
      background-color #224fa4
      color #fff
      line-height 40px
      margin-top 5px
      position absolute
      right 15px
  .card-footer
    .card-salon-num,.card-recently
      margin-top 5px
      font-size 14px
      color #b6b9b5
</style>

