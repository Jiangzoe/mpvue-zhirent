<template>
  <div class="sponsor">
    <div class="sponsor-header">
      <image class="sponsor-icon" :src="sponsor.avatar"></image>
      <div class="sponsor-name">{{sponsor.name}}</div>
      <Expander :info="sponsorInfo" :clickExpander="showDesc"></Expander>
     <button :class="sponsor.collected ? 'like' : 'unlike'">{{sponsor.collected ? '已关注' : '关注'}}</button>
    </div>
    <div class="salon-num">主办{{sponsor.salonNum}}场沙龙</div>
    <div v-if="sponsor.salonNum>0">
      <div class="card-container" v-for="(item,index) in salonList" :key="index">
        <Salon v-bind:list="item" v-bind:father="item"></Salon>
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
      salonList:[]
    }
  },
  components:{
    Expander,
    Salon
  },
  onLoad(options){
     let i = options.index;
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
        console.log(this.salonList)
         wx.hideLoading()
      }).catch((e) => {
        console.log(e)
      });
  }
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




  .card-container
    background-color #fff
    box-sizing border-box
    padding 10px 15px
    margin 0 10px 10px
    position relative
</style>
