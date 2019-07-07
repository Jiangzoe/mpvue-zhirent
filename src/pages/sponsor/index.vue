<template>
  <div class="sponsor">
    <div v-for="(item,index) in sponsors"  :key="index"  @click="toSponsorInfo(index)" class="card-container">
      <div class="card-content">
        <div class="card-icon">
          <image class="icon" :src="item.avatar"></image>
        </div>
        <div class="card-info">
          <div class="card-title">{{item.name}}</div>
          <div class="card-desc">{{item.info}}</div>
        </div>
        <button @click.stop="collect(index)" :class="collectList[index] ? 'like' : 'unlike'">{{collectList[index] ? '已关注' : '关注'}}</button>
      </div>
      <div class="card-footer">
        <div class="card-salon-num">共举办{{item.salonNum}}场沙龙</div>
        <div v-if="item.salonNum>0" class="card-recently">最近沙龙：{{item.salons[0].title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsors:[],
      collectList:[]
    }
  },
  onLoad(){
    wx.setNavigationBarTitle({
      title: '主办方'
    })
    this.getList()
  },
  onShow(){
    var cache = wx.getStorageSync('collectList')
    if(!cache){
      wx.setStorage({
        key:"collectList",
        data:this.collectList
      })
    }else{
      this.collectList = cache
    }
  },
  methods: {
    toSponsorInfo(index){
       const url = `/pages/sponsorInfo/main?index=${index}`
      wx.navigateTo({
        url
      });
    },
    collect(index){
      let self = this
      var cache = wx.getStorageSync('collectList')
      var currentCache = cache[index]
      if(!currentCache){
        currentCache = true
        wx.showLoading({
          title: '加载中',
        })
        cache[index] = currentCache
        wx.setStorage({
          key:'collectList',
          data:cache
        })
        self.collectList = cache
        wx.hideLoading()
      }else{
        wx.showActionSheet({
          itemList: ['取消关注'],
          success (res) {
            wx.showLoading({
              title: '加载中',
            })
            currentCache = false
            cache[index] = currentCache
            wx.setStorage({
              key:'collectList',
              data:cache
            })
            self.collectList = cache
            wx.hideLoading()
          }
        })
      }
      
    }
  },
  
}
</script>

<style lang="stylus" scoped>
.sponsor
  width 100%
  height 100%
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
      .card-salon-num,.card-recently
        margin-top 5px
        font-size 14px
        color #b6b9b5
</style>
