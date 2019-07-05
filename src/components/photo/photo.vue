<template>
  <div class="salon-info">
    <p class="info-item">现场照片</p>
    <div class="photo-container" v-if="photo.photoNum>0">
      <swiper :current="cur" next-margin="40px" @change="onSlideChangeEnd">
       <block  v-for="(item,index) in photo.photoInfo" :key="index">
         <swiper-item>
           <img class="salon-photo" :src="item" @click="previewImage(index)"/>
         </swiper-item>
       </block>
      </swiper>
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
      cur:0
    }
  },
  props:['photo','imgList'],
  methods: {
    onSlideChangeEnd(e){
      this.cur = e.target.current
    },
    previewImage(index){
      this.cur = index
      wx.previewImage({
      current:this.photo.photoInfo[index],
      urls:this.imgList
      })
    }
  },
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
    .salon-photo
      width 295px
      height 160px
    .grey
      width 120px
      height 160px
      .all
        width 120px
        height 160px
        background-color #e0e4e7
        text-align center
        box-sizing border-box
        padding-top 50px
        .tips
          margin-bottom 10px
          font-size 14px

  .desc-container
    margin-top 10px
    margin-bottom 0
    .no-photo
      text-align center
      font-size 14px
      color #c4c8c7
</style>
