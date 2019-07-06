<template>
  <div>
    <div class="card-container" v-for="(item,index) in list" :key="index">
      <div class="salon-card" @click="go(index)">
        <div class="salon-title">{{item.title}}</div>
        <div class="salon-content">
          <div class="content-left">
            <image class="salon-theme" :src="item.theme"></image>
          </div>
          <div class="content-right">
            <Popularity v-bind:popularity="item"></Popularity>
            <div class="content-item">{{item.startTime}}</div>
            <div class="content-item">{{item.address}}</div>
            <div class="status">已结束</div>
          </div>
        </div>
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
  props:['list'],
  methods: {
    go(index){
      this.$emit('go',index)
    }
  },
}
</script>

<style lang="stylus" scoped>
.card-container
  background-color #fff
  box-sizing border-box
  margin-bottom 10px
  padding 10px 15px
  position relative
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