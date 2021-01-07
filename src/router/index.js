import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sample from '../views/Sample.vue'
import ArticleEdit from '../views/ArticleEdit.vue'
import HpCreate from '../views/HpCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HpCreate',
    component: HpCreate
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sample',
    name: 'Sample',
    component: Sample
  },
  {
    path: '/article_edit',
    name: 'ArticleEdit',
    component: ArticleEdit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
