<template>
  <div class="mine">
    <User></User>
    <div class="tab">
      <div class="tab-item"  v-for="(item,index) in navList" :key="index" :data-current="index" @click="swichNav">
        <text class="item-text" :class="{active:changeNav == index}">{{item.name}}</text>
      </div>
    </div>
    <Nothing v-if="changeNav==0" :tips="salonTip"></Nothing>
    <Interest v-if="changeNav==1" :salon="interestList" @goDetail="goSalonDetail"></Interest>
    <Collect v-if="changeNav==2" :sponsors="collectList" @go="goSponDetail"></Collect>
  </div>
</template>

<script>
import User from '@/components/user/user'
import Nothing from '@/components/nothing/nothing'
import Interest from '@/components/interest/interest'
import Collect from '@/components/collect/collect'
export default {
  data() {
    return {
      userInfo: {},
      changeNav:0,
      navList: [{name:'参加'},{name:'感兴趣'},{name:'关注'}],
      salonTip:'还没有参加的沙龙',
      collectList:[],
      interestList:[],
      targetList:[],
      salonList:[],
      nickName:'',
      avatarUrl:''
    };
  },
  components:{
    User,
    Nothing,
    Collect,
    Interest
  },
  onShow(){
    this.$get("https://www.easy-mock.com/mock/5d17149edc925c312db9c9ea/zhirent/zhirent")
      .then((res) => {
        // 所有的主办方
        wx.showLoading()
        this.sponsors = res.data.data.sponsors;
        this.active = res.data.data.active

        // 拿到缓存中的主办方收藏列表
        var cache = wx.getStorageSync('collectList')
        console.log(cache.length)
        // 拿到收藏的主办方的下角标数组
        this.targetList = []
        if(cache.length>0){
          cache.forEach((item,i) => {
            if(item) this.targetList.push(i)
          });

          // 拿到收藏的主办方信息列表
          this.collectList = this.targetList.map(index => {
            let spon
            this.sponsors.forEach((item,i) => {
              if(index === i) spon = item
            })
            return spon
          })
          console.log(this.collectList)
        }
        
       

         // 拿到缓存中的活动感兴趣列表
        var salonCache = wx.getStorageSync('interestList')
        // 拿到感兴趣的活动的下角标数组
        this.salonList = []
        if(salonCache.length>0){
          salonCache.forEach((item,i) => {
            if(item) this.salonList.push(i)
          });

          // 拿到感兴趣的活动信息列表
          this.interestList = this.salonList.map(index => {
            let sal
            this.active.forEach((item,i) => {
              if(index === i) sal = item
            })
            return sal
          })
        // console.log(this.interestList)
        }
        
        wx.hideLoading()
    });
    wx.getUserInfo({
      success(res){
        var userInfo = res.userInfo
        console.log(userInfo)
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        wx.setNavigationBarTitle({
          title: nickName
        })
      }
    })
  },
  methods: {
    swichNav(e){
      const current = e.currentTarget.dataset.current
      this.changeNav = current
    },
    goSponDetail(index){
      const url = `/pages/sponsorInfo/main?index=${this.targetList[index]}`
      wx.navigateTo({
        url
      })
    },
    goSalonDetail(index){
      const url = `/pages/salonInfo/main?index=${this.salonList[index]}`
      wx.navigateTo({
        url
      })
    }
  },
};
</script>

<style lang="stylus" scoped>
.mine
  width 100%
  min-height 100vh
  background-color #f4f6f8
  .tab
    background-color #fff
    height 44px
    display flex
    border-bottom 1px solid #d9dde1
    .tab-item
      flex 1
      margin-top 10px
      color #c4c8c7
      text-align center
      .item-text
        font-weight bold
        font-size 16px
        padding 5px
      .active
        border-bottom 4px solid #224fa4
        color #000
        font-weight bold
        font-size 16px

  .collect
    width 100%
    height 100%
</style>
