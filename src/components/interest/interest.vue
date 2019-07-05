<template>
  <div class="interest-container">
    <div v-if="salon.length>0" >
      <div class="card-container" v-for="(item,index) in salon" :key="index">
        <Salon :list="item" :father="item"></Salon>
      </div>
      <div class="tips">~ 到底了 ~</div>
    </div>
    <Nothing v-else :tips="interestTip"></Nothing>
  </div>
</template>

<script>
import Nothing from '@/components/nothing/nothing'
import Salon from '@/components/salon/salon'
export default {
  data() {
    return {
      interestTip:'还没有感兴趣的沙龙'
    }
  },
  components:{
    Salon,
    Nothing
  },
  props:['salon']
}
</script>

<style lang="stylus" scoped>
.interest-container
  padding 20px 10px
  background-color #f4f6f8
  .card-container
    background-color #fff
    box-sizing border-box
    margin-bottom 10px
    padding 10px 15px
    position relative

.tips
  width 100%
  font-size 14px
  text-align center
</style>

