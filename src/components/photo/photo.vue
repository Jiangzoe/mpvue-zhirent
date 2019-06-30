<template>
  <div class="salon-info">
    <p class="info-item">现场照片</p>
    <div class="photo-container" v-if="photo.photoNum>0">
      <scroll-view scroll-x="true">
        <div class="swipper-item"  v-for="(item,index) in photo.photoInfo" :key="index">
          <image class="salon-photo" :src="item"></image>
        </div>
      </scroll-view>
    </div>
    <div v-else class="desc-container">
      <div class="no-photo">
      还没有照片
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
  props:['photo']
}
</script>

<style lang="stylus" scoped>
.salon-info
  margin-bottom 30px
  .info-item
    color #43457a
    font-size 16px
    margin-bottom 10px
  .photo-container
    height 160px
    display flex
    white-space nowrap
    .swipper-item
      width 295px
      margin-left 10px
      height 100%
      display inline-block
      .salon-photo
        max-height 100%
        max-width 100%
  .desc-container
    margin-top 10px
    margin-bottom 0
    .no-photo
      text-align center
      font-size 14px
      color #c4c8c7
</style>
