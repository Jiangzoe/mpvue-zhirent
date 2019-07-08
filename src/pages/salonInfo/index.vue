<template>
  <div class="salon-desc">
    <image class="header-img" :src="salon.theme"/>
    <div class="detail-container">
      <div class="card-container">
        <div class="card-info">
          <div class="card-title">{{salon.title}}</div>
          <div class="card-item">
            <image class="item-icon" src="/static/images/time.svg" />
            <text class="item-desc">{{salon.startTime}} 至 {{salon.endTime}}</text>
          </div>
          <div class="card-item">
            <image class="item-icon" src="/static/images/deadline.svg" />
            <text class="item-desc">{{salon.deadline}}</text>
          </div>
          <div class="card-item">
            <image class="item-icon" src="/static/images/address.svg"/>
            <text class="item-desc">{{salon.address}}</text>
          </div>
          <div class="card-item">
            <image class="item-icon" src="/static/images/people.svg"/>
            <text class="item-desc">{{salon.people}}人</text>
          </div>
          <div class="card-item">
            <image class="item-icon" src="/static/images/prices.svg"/>
            <text class="item-desc">{{salon.prices}}</text>
          </div>
        </div>
        <div class="card-footer">
          <div class="footer-item"> 
            <div class="footer-avatar">
              <image class="item-avatar" :src="joinInfo[0].avatar"></image>
              <image class="item-avatar" :src="joinInfo[1].avatar"></image>
              <image class="item-avatar" :src="joinInfo[2].avatar"></image>
            </div>
            <div class="join-desc">{{salon.joinNum}}人报名</div>
          </div>
          <div class="footer-item">
            <div class="footer-avatar" >
              <image class="item-avatar" :src="interestInfo[0].avatar"></image>
              <image class="item-avatar" :src="interestInfo[1].avatar"></image>
              <image class="item-avatar" :src="interestInfo[2].avatar"></image>
            </div>
            <div class="join-desc">{{interestNum}}人感兴趣</div>
          </div>
        </div>
      </div>
      <div class="salon-info">
        <p class="info-item">活动详情</p>
        <Expander :info="salonInfo"></Expander>
      </div>
      <Guest :guest="guests"></Guest>
      <Sponsor :sponsor="sponsors" :list="sponsorList" @goDetail="goSponDetail"></Sponsor>
      <Photo :photo="photos" :imgList="photos.photoInfo"></Photo>
      <Essay :article="articles"></Essay>
    </div>
    <div class="footer">
      <div @click="goShare" class="footer-item">
        <div>
          <image class="footer-icon" src="/static/images/share.svg"></image>
        </div>
        <div class="item-name">分享</div>
      </div>
      <div class="footer-item" @click="interest">
        <image class="footer-icon" :src="isInterested?'/static/images/like.svg':'/static/images/unlike.svg'" ></image>
        <text class="item-name">感兴趣</text>
      </div>
      <div class="footer-item">
        <div class="join">已结束</div>
      </div>
    </div>
    <Share v-if="isShare"  @cancel="cancelShare"></Share>
    <div :class="isShare ? 'mask' : ''"></div>
  </div>
</template>

<script>
import Expander from '@/components/expander/expander'
import Guest from '@/components/guest/guest'
import Sponsor from '@/components/sponsor/sponsor'
import Photo from '@/components/photo/photo'
import Essay from '@/components/essay/essay'
import Share from '@/components/share/share'
export default {
  data(){
    return{
      index:'',
      salon:{},
      joinInfo:[],
      interestInfo:[],
      salonInfo:'',
      guests:[],
      photos:{},
      sponsorList:[],
      isShare:false,
      isInterested:'',
      sponTargetList:[],
      interestNum:'',
      user:{}
    }
  },
  components:{
    Expander,
    Guest,
    Sponsor,
    Photo,
    Essay,
    Share
  },
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '沙龙详情'
    })
    let i = options.index;
    this.index = i
    wx.showLoading({
      title:'加载中'
    }),
    this.$http
      .get("https://www.easy-mock.com/mock/5d17149edc925c312db9c9ea/zhirent/zhirent")
      .then((res) => {
        let sponsorsInfos = res.data.data.sponsors;
        // 整条数据
        this.salon = res.data.data.active[i];
        // 参加详情
        this.joinInfo = this.salon.joinInfo
        // 感兴趣详情
        this.interestInfo = this.salon.interestInfo
        // 活动详情
        this.salonInfo = this.salon.salonDesc
        // 嘉宾
        this.guests = this.salon.guests
        // 主办方
        this.sponsors =this.salon.sponsors
        // 照片
        this.photos = this.salon.photos
        // 文章
        this.articles = this.salon.articles
        // 感兴趣人数
        this.interestNum = this.salon.interestNum
        // 拿到详细的主办方信息
        this.sponsorList = this.sponsors.sponsorsInfo.map(item=>{
          let spon;
          sponsorsInfos.forEach(sponsor=>{
            if(sponsor.name === item.name) spon = sponsor
          })
           return spon;
        })

        //拿到主办方列表的下标数组
        this.sponTargetList = this.sponsors.sponsorsInfo.map(item=>{
          let num;
          sponsorsInfos.forEach((sponsor,index)=>{
            if(sponsor.name === item.name) num = index
          })
           return num;
        })

        wx.hideLoading()
    })
  },
  onShow(){
    var cache = wx.getStorageSync('interestList')
    this.isInterested = cache[this.index]
    // 拿到用户信息
    wx.getUserInfo({
      success(res){
        var userInfo = res.userInfo
        console.log(userInfo)
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
      }
    })
    console.log(nickName)
    // this.user = {name:nickName,avatar:avatarUrl} 
  },
  methods: {
    interest(){
      wx.showLoading({
        title:'加载中'
      })
      var cache = wx.getStorageSync('interestList')
      var currentCache = cache[this.index]
      currentCache = !currentCache
      cache[this.index] = currentCache
      wx.setStorage({
        key:'interestList',
        data:cache
      })
      this.isInterested = cache[this.index]
      wx.hideLoading()
    },
    goSponDetail(index){
      const url = `/pages/sponsorInfo/main?index=${this.sponTargetList[index]}`
      wx.navigateTo({
        url
      })
    },
    goShare(){
      this.isShare = !this.isShare
    },
    cancelShare(msg){
      this.isShare = msg
    }
  },
}
</script>

<style lang="stylus" scoped>
.mask
  background-color #000
  opacity 0.9

.salon-desc
  width 100%
  height 100%
  background-color #f4f6f8
  .header-img
    height 190px
    width 100%
  .detail-container
    padding 0 15px
    margin-bottom 80px
    .card-container
      position relative
      top -10px
      border 1px solid #eaebed
      border-radius 5px
      width 350px
      box-sizing border-box
      padding 20px 15px 10px
      background-color #fefefe
      opacity 0.9
      .card-info
        border-bottom 1px dashed #eaebed
        .card-title
          font-size 16px
          font-weight bold
          margin-bottom 20px
        .card-item
          margin-bottom 15px
          .item-icon
            width 20px
            height 20px
            margin-right 10px
          .item-desc 
            font-size 14px
            height 20px
      .card-footer 
        display flex
        .footer-item
          display flex 
          flex 1
          margin-top 20px
          .footer-avatar
            margin-right 5px
            &first-child
              margin-left 0
            .item-avatar
              margin-left -5px
              width 25px
              height 25px
              border-radius 50%
          .join-desc 
            font-size 14px
            line-height 25px
            color #3260ac
    .salon-info
      margin-bottom 30px
      .info-item
        color #43457a
        font-size 16px
        margin-bottom 10px

.footer
  width 100%
  height 70px
  background-color #fff
  border-top 1px solid #eaebed
  position fixed
  bottom 0
  display flex
  .footer-item
    display flex
    margin-top 10px
    margin-bottom 10px
    .footer-icon
      width 25px
      height 25px
      margin-top 10px
      margin-left 40px
      margin-right 8px
    .item-name
      font-size 16px
      line-height 50px
      font-weight bold
    .join
      width 115px
      height 40px
      font-size 16px
      background-color #f2f2f3
      color #a0a49f
      margin-top 2px
      margin-left 20px
      text-align center
      line-height 40px

.mask
  height 100vh
  width 100vh
  position fixed
  top 0
  left 0
  background-color #000
  opacity 0.7
  z-index 20
</style>
