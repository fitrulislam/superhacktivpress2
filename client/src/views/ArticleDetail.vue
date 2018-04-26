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
            <div v-if="statusLogin">
              <li class="nav-item">
                <a class='nav-link'>
                    My Article
                  </a>
              </li>
              <li class="nav-item">
                <a class='nav-link'>
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
    <div class="container">
      <h3>{{ article.title }}</h3>
      <div class="">
        ---------------------------------------------------------------------------------------------------------------
      </div>
      <p>{{ article.content }}</p>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'articleDetail',
  props: ['id'],
  data () {
    return {
      statusLogin: false
    }
  },
  computed: {
    article () {
      return this.$store.state.article
    }
  },
  methods: {

  },
  created: function () {
    this.$store.dispatch('getOneArticle', this.id)
    console.log(this.article)
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
