<template>
  <div class="mine">
    <User></User>
    <div class="tab">
      <div class="tab-item"  v-for="(item,index) in navList" :key="index" :data-current="index" @click="swichNav">
        <text class="item-text" :class="{active:changeNav == index}">{{item.name}}</text>
      </div>
    </div>
    <Nothing v-if="changeNav==0" :tips="salonTip"></Nothing>
  </div>
</template>

<script>
import User from '@/components/user/user'
import Nothing from '@/components/nothing/nothing'
export default {
  data() {
    return {
      userInfo: {},
      changeNav:0,
      navList: [{name:'参加'},{name:'感兴趣'},{name:'关注'}],
      current:null,
      salonTip:'还没有参加的沙龙'
    };
  },
  components:{
    User,
    Nothing
  },
  methods: {
    swichNav(e){
      const current = e.currentTarget.dataset.current
      this.changeNav = current
      this.current = current
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
</style>
