<template>
  <div>
    <div>
      <textarea class="input-title" placeholder="제목을 입력해요" v-model="newtitle"></textarea>
    </div>
    <MarkdownEditor @write="newPostContent = $event"/>
    <div style="display: 'flex';">
      <button type="button" @click="addPost" class="btn btn-outline-info" style="float: right; margin: 1rem;">올리기</button>
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
.input-title {
  width: 750px;
  height: 60px;
  padding: 0.8rem;
  margin-top: 1.4rem;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 20px;
  resize: none;
  border: 0;
}
</style>
