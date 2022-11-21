<template>
  <div>
    <div class="shadow-lg p-3 mb-5 bg-body rounded" >
        <input class="input-title" placeholder="제목" v-model="newtitle">
    </div>
    <div class="shadow-lg p-3 mb-5 bg-body rounded">
      <MarkdownEditor @write="newPostContent = $event"/>
    </div>
    <div>
      <button type="button" @click="addPost" class="btn btn-outline-info" style="float: right;">올리기</button>
    </div>
  </div>
</template>
<script>
import MarkdownEditor from '../components/MarkdownEditor.vue'
import { marked } from 'marked'
export default {
  components: { MarkdownEditor },
  data () {
    return {
      sampleData: '',
      newPost: {
        title: 'a',
        name: 'a',
        date: 'a',
        content: 'a',
        tag: 'newtag'
      },
      newtitle: '',
      newPostContent: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    addPost () {
      this.newPost.title = this.newtitle
      this.newPost.content = marked(this.newPostContent)
      console.log(this.newPostContent)
      this.$store.state.postData.unshift(this.newPost)
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.input-title{
  resize: none;
  text-align: center;
  font-size: 25px;
  margin: 0 auto;
  width: 100%;
}
</style>
