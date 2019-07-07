<template>
  <div class="salons">
    <div v-for="(item,index) in active" :key="index" class="card-container" @click="toSalonInfo(index)" >
      <div class="card-title">{{item.title}}</div>
      <div class="card-content">
        <div class="card-img">
          <image :src="item.theme" class="theme-img"></image>
        </div>
        <div class="card-info">
          <div class="card-item">
            <div class="item-icon">
              <image :src="item.sponsorIcon" class="sponsor-icon"></image>
            </div>
            <div class="item-info sponsor-name">{{item.sponsorName}}</div>
          </div>
          <div class="card-item">
            <div class="item-icon">
              <image class="info-icon" src="/static/images/time.svg"></image>
            </div>
            <div class="item-info">{{item.startTime}}</div>
          </div>
          <div class="card-item">
            <div class="item-icon">
              <image class="info-icon" src="/static/images/address.svg"></image>
            </div>
            <div class="item-info">{{item.address}}</div>
          </div>
          <div class="card-item">
            <div class="item-icon">
              <image class="info-icon" src="/static/images/prices.svg"></image>
            </div>
            <div class="item-info">{{item.prices}}</div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <Popularity v-bind:popularity="item"></Popularity>
        <div class="status">已结束</div>
      </div>
    </div>
  </div>
</template>

<script>
import Popularity from "@/components/popularity/popularity"
export default {
  data() {
    return {
      active:[],
      basicInfo:{},
      interestList:[]
    }
  },
  components:{
     Popularity
  },
  onLoad(){
    wx.setNavigationBarTitle({
      title: '沙龙'
    })
    this.getList();
  },
  onShow(){
    var cache = wx.getStorageSync('interestList')
    if(!cache){
      wx.setStorage({
        key:"interestList",
        data:this.interestList
      })
    }else{
      this.interestList = cache
    }
  },
  methods: {
    toSalonInfo(index) {
      const url = `/pages/salonInfo/main?index=${index}`;
      wx.navigateTo({
        url
      });
    }
  },
}
</script>

<style lang="stylus" scoped>
.salons
  width 100%
  height 100%
  background-color #f4f6f8
  .card-container 
    padding 15px
    background-color #fff
    margin-bottom 10px
    .card-title 
      font-weight bold
      font-size 18px
      margin-bottom 10px
    .card-content 
      display flex
      margin-bottom 20px
      .card-img 
        margin-right 10px
        .theme-img 
          width 160px
          height 110px
      .card-info 
        .card-item 
          display flex
          margin-bottom 4px
          .item-icon, .item-no 
            margin-right 10px
            .sponsor-icon 
              width 25px
              height 25px
              border-radius 50%       
            .info-icon 
              width 20px
              height 20px
          .item-info 
            font-size 14px
            width 140px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            color #2c2c2c       
          .sponsor-name 
            line-height 25px
    .card-footer 
      display flex
      .status 
        width 90px
        height 30px
        line-height 30px
        position absolute
        right 0
        background-color #fff
        color #9a9e99
        font-size 16px 
</style>