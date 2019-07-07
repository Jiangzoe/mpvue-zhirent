<template>
  <div class="sponsor">
    <div class="sponsor-header">
      <image class="sponsor-icon" :src="sponsor.avatar"></image>
      <div class="sponsor-name">{{sponsor.name}}</div>
      <Expander :info="sponsorInfo" ></Expander>
     <button @click="collect" :class="isCollected ? 'like' : 'unlike'">{{isCollected ? '已关注' : '关注'}}</button>
    </div>
    <div class="salon-num">主办{{sponsor.salonNum}}场沙龙</div>
    <div v-if="sponsor.salonNum>0">
      <div class="content-container">
       <Salon :list="salonList" @go="goSalonDetail"></Salon>
      </div>
    </div>
  </div>
</template>

<script>
import Expander from '@/components/expander/expander'
import Salon from '@/components/salon/salon'

export default {
  data() {
    return {
      sponsor:{},
      salonList:[],
      index:'',
      isCollected:'',
      salTargetList:[]
    }
  },
  components:{
    Expander,
    Salon
  },
  onLoad(options){
     let i = options.index;
     this.index = i
     wx.showLoading({
      title:'加载中'
    }),
    this.$http
      .get("https://www.easy-mock.com/mock/5d17149edc925c312db9c9ea/zhirent/zhirent")
      .then((res) => {
        let salonsInfos = res.data.data.active
        // 整条数据
        this.sponsor = res.data.data.sponsors[i];
        // 主办方详情
        this.sponsorInfo = this.sponsor.info

        // 拿到详细的活动详情
        if(this.sponsor.salonNum>0){
          this.salonList = this.sponsor.salons.map(item=>{
            let sal
            salonsInfos.forEach(salon => {
              if(salon.title === item.title) sal = salon
            })
            return sal
          })
        }

        // 拿到活动列表的下标数组
         // 拿到详细的活动详情
        if(this.sponsor.salonNum>0){
          this.salTargetList = this.sponsor.salons.map(item=>{
            let num
            salonsInfos.forEach((salon,index) => {
              if(salon.title === item.title) num = index
            })
            return num
          })
        }
         wx.hideLoading()
      });
  },
  onShow(){
    // 拿到缓存区的收藏信息
    var cache = wx.getStorageSync('collectList')
    this.isCollected = cache[this.index]
  },
  methods: {
    collect(){
      var cache = wx.getStorageSync('collectList')
      let self = this
      var currentCache = cache[self.index]
      if(!currentCache){
        wx.showLoading({
          title:'加载中'
        })
        currentCache = true
        cache[self.index] = currentCache
        wx.setStorage({
          key:'collectList',
          data:cache
        })
        self.isCollected = cache[self.index]
        wx.hideLoading()
      }else{
        wx.showActionSheet({
          itemList: ['取消关注'],
          success(res){
            wx.showLoading({
              title:'加载中'
            })
            currentCache = false
            cache[self.index] = currentCache
            wx.setStorage({
              key:'collectList',
              data:cache
            })
            self.isCollected = cache[self.index]
            wx.hideLoading()
          }
        })
      }
    },
    goSalonDetail(index){
      const url = `/pages/salonInfo/main?index=${this.salTargetList[index]}`
      wx.navigateTo({
        url
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.sponsor
  width: 100%
  height 100%
  min-height 100vh
  background-color #f4f6f8
  .sponsor-header
    background-color #fff
    padding 15px 20px 25px
    border-bottom 1px solid #eaebed
    text-align center
    .sponsor-icon
      width 50px
      height 50px
      margin-bottom 10px
      border-radius 50%
    .sponsor-name
      font-size 16px
      font-weight bold
      margin-bottom 10px
    .like,.unlike
      width 80px
      height 40px
      margin-top 10px
      font-size 16px
      line-height 40px
      border 1px solid #224fa4
    .unlike
      color #fff
      background-color #224fa4
    .like
      color #224fa4
      background-color #fff
  .salon-num
    color #3f4177
    font-size 16px
    margin-top 15px
    margin-bottom 20px
    margin-left 15px
    font-weight bold

.content-container
  padding 0 10px
</style>
