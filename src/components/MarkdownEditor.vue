<template>
  <div>
    <textarea class="input" @input="$emit('write', $event.target.value)" placeholder="내용을 입력하세요 (markdown)"></textarea>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      sampleData: '',
      input: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
  },
  props: {
  }
}
</script>
<style scoped>
.input {
  resize: none;
  font-size: 18px;
  margin: 0 auto;
  height: 700px;
  width: 100%;
}
</style>
