<template>
   <div class="salon-info">
        <p class="info-item">{{guest.guestNum}}位嘉宾</p>
        <div class="guest-container" v-if="guest.guestNum>0">
          <div class="guest-card" v-for="(item,index) in guest.guestInfo" :key="index">
            <image class="guest-avatar" :src="item.photo"></image>
            <p class="guest-name">{{item.name}}</p>
            <p class="guest-info">{{item.company}},{{item.job}}</p>
          </div>
        </div>
        <div v-else class="guest-container">
          <div class="no-guest">
            主办方还没有添加嘉宾
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
  props:[
    'guest'
  ]

}
</script>

<style lang="stylus" scoped>
.salon-info
  margin-bottom 30px
  .info-item
    color #43457a
    font-size 16px
    margin-bottom 10px
  .guest-container
    flex-wrap wrap
    justify-content space-between
    display flex
    .no-guest
      margin 10px auto 0
      font-size 14px
      color #c4c8c7
    .guest-card
      width 164px
      height 120px
      border 1px solid #eaebed
      box-sizing border-box
      padding 8px 14px 0
      margin-bottom 5px
      background-color #fff
      text-align center
      .guest-avatar
        width 50px
        height 50px
        border-radius 50%
        margin-bottom 5px
      .guest-name
        font-size 16px
        margin-bottom 5px
        font-weight bold
      .guest-info
        margin-bottom 10px
        font-size 14px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
</style>
