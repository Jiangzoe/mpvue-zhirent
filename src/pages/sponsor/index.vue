<template>
  <div class="sponsor">
    <ul>
      <li v-for="(item,index) in sponsors" :key="index"  @click="toSponsorInfo(index)">
         <div class="card-container">
            <div class="card-content">
              <div class="card-icon">
                <image class="icon" :src="item.avatar"></image>
              </div>
              <div class="card-info">
                <div class="card-title">{{item.name}}</div>
                <div class="card-desc">{{item.info}}</div>
              </div>
              <button @click="collect(index)" :class="item.collected ? 'like' : 'unlike'">{{item.collected ? '已关注' : '关注'}}</button>
            </div>
            <div class="card-footer">
              <div class="card-salon-num">共举办{{item.salonNum}}场沙龙</div>
              <div v-if="item.salonNum>0" class="card-recently">最近沙龙：{{item.salons[0].title}}</div>
            </div>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsors:[]
    }
  },
  onLoad(){
    this.getList()
  },
  methods: {
    toSponsorInfo(index){
       const url = `/pages/sponsorInfo/main?index=${index}`
      wx.navigateTo({
        url
      });
    },
    collect(index){
      for (let i = 0; i < this.sponsors.length; i++) {
        if (i === index) {
          this.sponsors[i].collected = !this.sponsors[i].collected
          let title = this.sponsors[i].collected ? '关注成功' : '取消成功'
          wx.showToast({
            title
          })
          let oldStorage = wx.getStorageSync('isCollected')
          // 初始化
          oldStorage = {}
          oldStorage[i] = this.sponsors[i].collected
          // 将本次设置的结果再缓存到本地
          wx.setStorage({
            key:'isCollect',
            data:oldStorage
          })
        }
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
