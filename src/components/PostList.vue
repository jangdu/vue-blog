<template>
  <div>
    <button type="button" @click="$router.push('/addPost')" class="btn btn-outline-info">글쓰기</button>
    <div class="postList" v-for="item in postData" :key="item">
      <div class="card">
        <div class="card-body">
          <h2 @click="indexOfPostData(item)">{{item.title}}</h2>
          <span>{{item.date}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      sampleData: '',
      i: 0
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    indexOfPostData (a) {
      this.i = this.$store.state.postData.indexOf(a)
      this.$router.push(`/blogPost/${this.i}`)
    }
  },
  props: {
    postData: Array
  }
}
</script>
<style scoped>
.postList {
    padding-top: 2rem;
    padding-bottom: 2rem;
    line-height: 1.5;
}
</style>
