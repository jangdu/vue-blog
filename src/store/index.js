import { createStore } from 'vuex'

export default createStore({
  state: {
    postData: [
      {
        title: '만들어보기',
        name: '장두혁',
        date: '0000.00.00',
        content: '### html에 class\nhtml안에 class명을 넣을 때는 className="" 으로 사용한다. App.js같은 jsx에서는 일반적인 html을 사용하지 않는다.\n',
        tag: 'vue.js'
      },
      {
        title: '주워먹어',
        name: '장두혁',
        date: '0000.00.00',
        content: '1111111111111111111111111111111111111111111',
        tag: 'javascript'
      },
      {
        title: '점심먹어보기',
        name: '장두호',
        date: '0000.00.00',
        content: '2222222222222222222222222222222',
        tag: 'python'
      },
      {
        title: '저녁먹어보기',
        name: '이름이',
        date: '0000.00.00',
        content: '33333333333333333333333333333333333',
        tag: 'ES6'
      }
    ],
    tags: [
      'js'
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
