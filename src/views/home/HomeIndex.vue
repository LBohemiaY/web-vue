<template>
  <el-container>
    <el-main class="me-articles" />
    <el-aside>
      <card-me class="me-area" />
      <card-tag :tags="hotTags" />
      <card-article card-header="最热文章" :articles="hotArticles" />
      <card-archive card-header="文章归档" :archives="archives" />
      <card-article card-header="最新文章" :articles="newArticles" />
    </el-aside>
  </el-container>
</template>

<script>
import CardMe from '@/components/card/CardMe'
import CardArticle from '@/components/card/CardArticle'
import CardArchive from '@/components/card/CardArchive'
import CardTag from '@/components/card/CardTag'

export default {
  name: 'Index',
  components: {
    'card-me': CardMe,
    'card-article': CardArticle,
    'card-tag': CardTag,
    'card-archive': CardArchive
  },
  data() {
    return {
      hotTags: [],
      hotArticles: [],
      newArticles: [],
      archives: []
    }
  },
  created() {
  },
  methods: {

  }
}
</script>

<style scoped>

  .el-container {
    width: 960px;
  }

  .el-aside {
    margin-left: 20px;
    width: 260px;
  }

  .el-main {
    padding: 0px;
    line-height: 16px;
  }

  .el-card {
    border-radius: 0;
  }

  .el-card:not(:first-child) {
    margin-top: 20px;
  }
</style>
