import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ArticleDetail from './views/ArticleDetail.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import MyArticle from './views/MyArticle.vue'
import AddArticle from './views/AddArticle.vue'
import EditArticle from './views/EditArticle.vue'

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
      component: SignIn,
      beforeEnter: (to, from, next) => {
        let status = localStorage.getItem('status')
        if (status === 'connected') {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      beforeEnter: (to, from, next) => {
        let status = localStorage.getItem('status')
        if (status === 'connected') {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/myarticle',
      name: 'myarticle',
      component: MyArticle,
      beforeEnter: (to, from, next) => {
        let status = localStorage.getItem('status')
        if (status === 'connected') {
          next()
        } else {
          next('/')
        }
      }
    },
    {
      path: '/addarticle',
      name: 'addarticle',
      component: AddArticle
    },
    {
      path: '/editarticle/:id',
      name: 'editarticle',
      props: true,
      component: EditArticle
    }
  ]
})
