<template>
  <div class="salon-info">
    <p class="info-item">{{sponsor.sponsorsNum}}个主办方</p>
    <div class="sponsor-container"  v-for="(item,index) in list" :key="index">
    <div class="sponsor-card" @click="goDetail(index)">
      <image class="sponsor-icon" :src="item.avatar"></image>
      <div class="sponsor-info">
        <p class="sponsor-item">{{item.name}}</p>
        <p class="sponsor-item">共举办{{item.salonNum}}场沙龙</p>
      </div>
      <image class="right" src="/static/images/right.svg"></image>
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
  props:['sponsor','list'],
  methods: {
    goDetail(index){
      this.$emit('goDetail',index)
    }
  },
}
</script>

<style lang="stylus" scoped>
.salon-info
  margin-bottom 30px
  .info-item
    color #43457a
    font-size 16px
    margin-bottom 10px
  .sponsor-container
    .sponsor-card
      width 350px
      height 80px
      position relative
      background-color #fff
      border 1px solid #eaebed
      box-sizing border-box
      padding 15px 20px
      margin-bottom 5px
      display flex
      .sponsor-icon
        width 50px
        height 50px
        border-radius 50%
        margin-right 10px
      .sponsor-info
        .sponsor-item
          margin-bottom 5px
          font-size 14px
      .right
        width 15px
        height 15px
        position absolute
        top 32px
        right 20px
</style>

