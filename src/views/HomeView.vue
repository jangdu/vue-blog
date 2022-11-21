<template>
  <div>
    <h1 class="title">myblog</h1>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tag</a>
      </li>
    </ul>
    <PostList :postData="$store.state.postData"/>
  </div>
</template>
<script>
import PostList from '../components/PostList.vue'
export default {
  components: {
    PostList
  },
  data () {
    return {
      sampleData: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>
<style scoped>
.title{
  text-align: center;
  margin: 0 auto;
  margin-top: 2rem;
}
</style>
