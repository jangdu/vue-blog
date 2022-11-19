import { createStore } from 'vuex'

export default createStore({
  state: {
    postData: [
      {
        title: '만들어보기',
        name: '0',
        date: '0000.00.00',
        content: '000000000000000000000000000000000000000000',
        tag: '0'
      },
      {
        title: '주워먹어',
        name: '1',
        date: '1',
        content: '1111111111111111111111111111111111111111111',
        tag: '1'
      },
      {
        title: '점심먹어보기',
        name: '2',
        date: '2',
        content: '2222222222222222222222222222222',
        tag: '2'
      },
      {
        title: '저녁먹어보기',
        name: '3',
        date: '3',
        content: '33333333333333333333333333333333333',
        tag: '3'
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
