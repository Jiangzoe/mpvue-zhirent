<template>
    <div class="salon-card" >
      <div class="salon-title">{{list.title}}</div>
      <div class="salon-content">
        <div class="content-left">
          <image class="salon-theme" :src="list.theme"></image>
        </div>
        <div class="content-right">
          <Popularity v-bind:popularity="father"></Popularity>
          <div class="content-item">{{list.startTime}}</div>
          <div class="content-item">{{list.address}}</div>
          <div class="status">已结束</div>
        </div>
      </div>
    </div>
</template>

<script>
import Popularity from '@/components/popularity/popularity';
export default {
  data() {
    return {
    }
  },
  components:{
    Popularity
  },
  props:['list','father']
}
</script>

<style lang="stylus" scoped>
.salon-title
  font-size 18px
  font-weight bold
  margin-bottom 10px
.salon-content
  display flex
  .content-left
    margin-right 10px
    .salon-theme
      width 118px
      height 80px
  .content-right
    /deep/.footer-desc
      color #c4c8c7
      width 120px
    .content-item
      font-size 14px
      color #c4c8c7
      width 135px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .status
      color #3f4177
      font-size 14px
      position absolute
      right 20px
      bottom 15px
</style>