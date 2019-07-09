<template>
  <div class="popularity">
    <div v-if="popularity.joinInfo.length>0" class="footer-avatar">
      <image v-if="popularity.joinInfo[0].avatar" class="show-avatar" :src="popularity.joinInfo[0].avatar" />
      <image v-if="popularity.joinInfo[1].avatar" class="show-avatar" :src="popularity.joinInfo[1].avatar" />
      <image v-if="popularity.joinInfo[2].avatar" class="show-avatar" :src="popularity.joinInfo[2].avatar" />
    </div>
    <div v-else class="footer-avatar">
      <image class="show-avatar" src="/static/images/no-one.jpg" />
    </div>
    <div class="footer-desc">{{popularity.joinInfo.length}}人报名/{{popularity.interestInfo.length}}人感兴趣</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props:['popularity']
};
</script>

<style lang="stylus" scoped>
.popularity
  display flex
  .footer-avatar
  &:first-child
    margin: 0;
    .show-avatar 
      margin-left: -5px;
      margin-top: 5px;
      width: 25px;
      height: 25px;
      border-radius: 50%;   
  .footer-desc
    margin-left: 5px;
    margin-top: 5px;
    font-size: 14px;
    line-height: 25px;
    color: #2c2c2c;
</style>
