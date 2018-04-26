import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ArticleDetail from './views/ArticleDetail.vue'
import SignIn from './views/SignIn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articleDetail/:id',
      name: 'articleDetail',
      props: true,
      component: ArticleDetail
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }
  ]
})
