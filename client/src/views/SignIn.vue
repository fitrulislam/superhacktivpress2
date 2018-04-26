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
    </nav>
  </header>
  <div class="container">
    <div style="height: 100vh">
      <div class="flex-center flex-column">
        <div class="form">
          <p class="h4 text-center mb-4">Sign in</p>
          <div class="md-form">
            <input type="text" class="form-control" placeholder="username" v-model="username">
          </div>
          <div class="md-form">
            <input type="password" class="form-control" placeholder="password" v-model="password">
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-default" type="submit" @click="forSignIn">Sign In</button>
          </div>
        </div>
        <div class="">
          <p>Don't have an account? Please
            <router-link to="/signup">Sign Up</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    forSignIn () {
      let form = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('signin', form)
    }
  }
}
</script>

<style scoped>
div .form {
  width: 400px;
  padding-bottom: 20px;
}
</style>
