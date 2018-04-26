import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    article: {}
  },
  mutations: {
    getAllArticles (state) {
      axios.get('http://localhost:3000/article/read')
        .then(response => {
          state.articles = response.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    getOneArticle (state, payload) {
      axios.get(`http://localhost:3000/article/readone/${payload}`)
        .then(response => {
          state.article = response.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  actions: {
    getAllArticles ({commit}) {
      commit('getAllArticles')
    },
    getOneArticle ({commit}, payload) {
      commit('getOneArticle', payload)
    }
  }
})
