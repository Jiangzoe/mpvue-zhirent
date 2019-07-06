<template>
<div>
  <div class="collect-container" v-if="sponsors.length>0">
    <div v-for="(item,index) in sponsors" :key="index" >
      <div class="card-container" @click="go(index)">
        <div class="card-content">
          <div class="card-icon">
            <image class="icon" :src="item.avatar"></image>
          </div>
          <div class="card-info">
            <div class="card-title">{{item.name}}</div>
            <div class="card-desc">{{item.info}}</div>
          </div>
          <!-- <button @click.stop="collect(index)" :class="collectList[index] ? 'like' : 'unlike'">{{collectList[index] ? '已关注' : '关注'}}</button> -->
        </div>
        <div class="card-footer">
          <div class="card-salon-num">共举办{{item.salonNum}}场沙龙</div>
        </div>
      </div>
    </div>
    <div class="tips">~ 到底了 ~</div>
  </div>
  <Nothing v-else :tips="collectTip"></Nothing>
</div>
</template>

<script>
import Nothing from '@/components/nothing/nothing'
export default {
  data() {
    return {
      sponsors:[],
      collectTip:'还没有关注的主办方'
    }
  },
  props:['sponsors'],
  components:{
    Nothing
  },
  methods: {
    go(index){
     this.$emit('go',index)
    }
  },
}
</script>

<style lang="stylus" scoped>
.collect-container
  padding 20px 10px
  background-color #f4f6f8
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
      .like,.unlike
        width 80px
        height 40px
        line-height 40px
        font-size 16px
        margin-top 5px
        position absolute
        right 15px
        border 1px solid #224fa4
      .unlike
        background-color #224fa4
        color #fff
      .like
        background-color #fff
        color #224fa4
    .card-footer
      .card-salon-num
        margin-top 5px
        font-size 14px
        color #b6b9b5


.tips
  font-size 14px
  width 100%
  text-align center
</style>
