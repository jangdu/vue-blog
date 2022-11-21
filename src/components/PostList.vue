<template>
  <div>
    <div class="nav justify-content-end">
      <button type="button" @click="$router.push('/addPost')" class="btn btn-outline-info" style="margin: 2rem;">글쓰기</button>
    </div>
    <div class="shadow-lg p-3 mb-5 bg-body rounded" v-for="item in postData" :key="item">
          <h2 class="listTitle" @click="indexOfPostData(item)">{{item.title}}</h2>
          <div class="small-content" v-html="item.content.slice(0, 30)"></div>
          <div class="information">
            <span class="name">{{item.name}}</span>
            <span class="date">{{item.date}}</span>
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
    padding-top: 1rem;
    padding-bottom: 1rem;
    line-height: 1.5;
}
.information {
  margin-top: 0.3rem;
  color: gray;
  align-items: center;
}
.date {
  margin: 0.2rem;
}
.name {
  color: rgb(62, 62, 62);
  margin: 0.2rem;
}
.listTitle{
  cursor: pointer;
  width: auto;
}
</style>
