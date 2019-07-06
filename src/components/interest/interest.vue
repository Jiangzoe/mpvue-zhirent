<template>
  <div class="interest-container">
    <div v-if="salon.length>0" >
        <Salon :list="salon" @go="goDetail"></Salon>
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
  props:['salon'],
  methods: {
    goDetail(index){
      this.$emit('goDetail',index)
    }
  },
}
</script>

<style lang="stylus" scoped>
.interest-container
  padding 20px 10px
  background-color #f4f6f8

.tips
  width 100%
  font-size 14px
  text-align center
</style>

