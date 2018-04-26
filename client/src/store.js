import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    article: {},
    ownArticle: []
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
    },
    signin (state, payload) {
      axios.post('http://localhost:3000/user/signin', payload, {})
        .then(response => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('status', 'connected')
          location.reload()
        })
        .catch(err => {
          console.log(err)
        })
    },
    signout (state) {
      localStorage.clear()
      location.reload()
    },
    signup (state, payload) {
      axios.post('http://localhost:3000/user/signup', payload, {})
        .then(response => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('status', 'connected')
          location.reload()
        })
        .catch(err => {
          console.log(err)
        })
    },
    getOwnArticles (state) {
      axios.post('http://localhost:3000/article/readbyauthor', {}, {
        headers: {token: localStorage.getItem('token')}
      })
        .then(response => {
          state.ownArticle = response.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    addArticle (state, payload) {
      axios.post('http://localhost:3000/article/create', payload, {
        headers: {token: localStorage.getItem('token')}
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    delete (state, payload) {
      let array = []
      state.ownArticle.forEach(article => {
        if (article._id !== payload) {
          array.push(article)
        }
      })
      state.ownArticle = array
    },
    deleteArticle (state, payload) {
      axios.post(`http://localhost:3000/article/remove/${payload}`, {}, {
        headers: {token: localStorage.getItem('token')}
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editArticle (state, payload) {
      axios.post(`http://localhost:3000/article/edit/${payload[0]}`, payload[1], {
        headers: {token: localStorage.getItem('token')}
      })
        .then(response => {
          console.log(response)
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
    },
    signin ({commit}, payload) {
      commit('signin', payload)
    },
    signup ({commit}, payload) {
      commit('signup', payload)
    },
    getOwnArticles ({commit}) {
      commit('getOwnArticles')
    },
    addArticle ({commit}, payload) {
      commit('addArticle', payload)
    },
    deleteArticle ({commit}, payload) {
      commit('deleteArticle', payload)
    },
    editArticle ({commit}, payload) {
      commit('editArticle', payload)
    }
  }
})
