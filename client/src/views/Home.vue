<template>
  <div class='main'>
    <header class='navbar'>
      <nav class='navbar navbar-expand-lg navbar-dark bg-info fixed-top'>
        <div class='collapse navbar-collapse order-0 navbarCollapse1'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link navbar-brand'>
                <router-link to="/" style="color: white !important;">Super Hacktivpress</router-link>
              </a>
            </li>
          </ul>
        </div>
        <div class='collapse navbar-collapse order-2 navbarCollapse2'>
          <div class='navbar-collapse dual-collapse2'>
            <ul class='navbar-nav ml-auto'>
              <div v-if="statusLogin" class="form-inline">
                <li class="nav-item">
                  <a class='nav-link'>
                    <router-link to="/myarticle" style="color: white !important;">My Article</router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class='nav-link' @click="signout">
                    Sign Out
                  </a>
                </li>
              </div>
              <div v-else>
                <li class='nav-item'>
                  <a class='nav-link'>
                    <router-link to="/signin" style="color: white !important;">Sign In</router-link>
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
          <h3>Article</h3>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article in articles" :key="article._id">
              <td><h6>{{ article.title }}</h6></td>
              <td><h6>{{ article.content }}</h6></td>
              <td class="text-right">
                <router-link type="button" class="btn btn-sm btn-default" :to="{ name: 'articleDetail', params: {id: article._id} }">
                  Read more...
                </router-link>
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
  name: 'home',
  data () {
    return {
      statusLogin: false
    }
  },
  computed: {
    articles () {
      return this.$store.state.articles
    }
  },
  methods: {
    signout () {
      this.$store.commit('signout')
    }
  },
  created: function () {
    this.$store.dispatch('getAllArticles')
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
