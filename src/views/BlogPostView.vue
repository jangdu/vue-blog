<template>
<div>
  <div class="post">
    <div class="shadow-none p-3 mb-5 bg-light rounded">
    <h2 class="title">{{postData.title}}</h2>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="#" style="color: gray;">수정</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" style="color: gray;">삭제</a>
      </li>
    </ul>
    <div class="information">
      <div>
        <span class="name">{{postData.name}}</span>
        <span style="color: gray">{{postData.date}}</span>
      </div>
      <div class="likes">
        <button>O</button>
      </div>
    </div>
    <div class="tags">
      <div>{{postData.tag}}</div>
    </div>
    </div>
    <div class="content">
      <div v-html="postData.content"></div>
    </div>
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
.information {
  align-content: center;
  align-items: center;
  justify-content: space-between;
  display: flex;
}
.name {
  margin: 0.7rem;
}
.likes{
  margin-top: 0.6rem;
  margin-right: 1rem;
}
.tags{
  display: flex;
  margin-bottom: 2rem;
  margin: 0.7rem;
}
.content{
  display: flex;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
}
</style>
