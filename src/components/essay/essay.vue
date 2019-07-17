<template>
  <div class="card-container">
    <div class="card-title">{{article.articleNum}}篇文章</div>
    <div class="article-container" v-if="article.articleNum>0">
      <div class="article-container__detail" v-for="(item,index) in article.articleInfo" :key="index">
        <div class="detail-title">{{item.title}}</div>
        <div class="detail-author">作者：{{item.author}}</div>
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
.card-container
  margin-bottom 30px
  .card-title
    color #43457a
    font-size 16px
    margin-bottom 10px
  .article-container
    .article-container__detail
      box-sizing border-box
      padding 10px
      margin-bottom 5px
      border 1px solid #eaebed
      background-color #fff
      .detail-title
        margin-bottom 5px
        font-size 16px
        font-weight bold
      .detail-author
        font-size 14px
        color #babcb8
    .no-article
      text-align center
      font-size 14px
      color #c4c8c7
</style>