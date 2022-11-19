import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  //  {
  //    path: '/about',
  //    name: 'about',
  //    // route level code-splitting
  //    // this generates a separate chunk (about.[hash].js) for this route
  //    // which is lazy-loaded when the route is visited.
  //    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //  }
  {
    path: '/blogReadme',
    name: 'blogReadme',
    component: () => import(/* webpackChunkName: "blogReadme" */ '../views/BlogReadmeView.vue')
  },
  {
    path: '/blogPost/:postItemIndex/',
    name: 'blogPost',
    component: () => import(/* webpackChunkName: "blogPost" */ '../views/BlogPostView.vue')
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: () => import(/* webpackChunkName: "addPost" */ '../views/AddPostView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
