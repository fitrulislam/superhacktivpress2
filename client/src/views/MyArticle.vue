<template>
  <div class='main'>
    <header class='navbar'>
      <nav class='navbar navbar-expand-lg navbar-dark bg-info fixed-top'>
        <div class='collapse navbar-collapse order-0 navbarCollapse1'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link navbar-brand'>
                <router-link to="/">Super Hacktivpress</router-link>
              </a>
            </li>
          </ul>
        </div>
        <div class='collapse navbar-collapse order-2 navbarCollapse2'>
          <div class='navbar-collapse dual-collapse2'>
            <ul class='navbar-nav ml-auto'>
              <div v-if="statusLogin" class="form-inline">
                <li class="nav-item">
                  <a class='nav-link' @click="signout">
                    Sign Out
                  </a>
                </li>
              </div>
              <div v-else>
                <li class='nav-item'>
                  <a class='nav-link'>
                    <router-link to="/signin">Sign In</router-link>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <section>
      <div class='container'>
        <div class=''>
          <h3>My Article</h3>
        </div>
        <div class="d-flex">
          <button type="button" class="btn btn-sm btn-primary">
            <router-link to="/addarticle" style="color: white !important;">Add Article</router-link>
          </button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article in ownArticle" :key="article._id">
              <td><h6>{{ article.title }}</h6></td>
              <td><h6>{{ article.content }}</h6></td>
              <td class="text-right">
                <router-link type="button" class="btn btn-sm btn-default" :to="{ name: 'articleDetail', params: {id: article._id} }">
                  Details
                </router-link>
                <button type="button" class="btn btn-sm btn-info">Edit</button>
                <button type="button" class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'myarticle',
  data () {
    return {
      statusLogin: false
    }
  },
  methods: {
    signout () {
      this.$store.commit('signout')
    }
  },
  computed: {
    ownArticle () {
      return this.$store.state.ownArticle
    }
  },
  created: function () {
    this.$store.dispatch('getOwnArticles')
    let status = localStorage.getItem('status')
    if (status === 'connected') {
      this.statusLogin = true
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 60px;
}
.text-center {
  padding-top: 20px;
}
</style>
