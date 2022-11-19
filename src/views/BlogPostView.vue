<template>
<div>
  <div class="post">
    <h2 class="title">{{postData.title}}</h2>
    <div v-html="postData.content"></div>
  </div>
  <BlogComment/>
</div>
</template>
<script>
import BlogComment from '../components/BlogComment.vue'
export default {
  components: {
    BlogComment
  },
  data () {
    return {
      sampleData: '',
      postData: this.$store.state.postData[this.$route.params.postItemIndex]
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {},
  props: {

  }
}
</script>
<style scoped>
.post{
  margin-top: 4rem;
}
.title{

}
.postContent{
  margin-top: 30px;
  padding: auto;
}
</style>
