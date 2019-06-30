<template>
  <div class="salon-info">
    <div class="info-item">{{article.articleNum}}篇文章</div>
    <div class="article-container" v-if="article.articleNum>0">
      <div class="article-card" v-for="(item,index) in article.articleInfo" :key="index">
        <div class="article-title">{{item.title}}</div>
        <div class="article-author">作者：{{item.author}}</div>
      </div>
    </div>
    <div class="article-container" v-else>
      <div class="no-article">关注职人社（微信号：Zhirent）第一时间接收文章</div>
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
    'article'
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
  .article-container
    .article-card
      box-sizing border-box
      padding 10px
      margin-bottom 5px
      border 1px solid #eaebed
      background-color #fff
      .article-title
        margin-bottom 5px
        font-size 16px
        font-weight bold
      .article-author
        font-size 14px
        color #babcb8
    .no-article
      text-align center
      font-size 14px
      color #c4c8c7
</style>