<template>
<div class="main">
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
    </nav>
  </header>
  <div class="container">
    <div style="height: 100vh">
      <div class="flex-center flex-column">
        <div class="form">
          <p class="h4 text-center mb-4">Sign Up</p>
          <div class="md-form">
            <input type="text" class="form-control" placeholder="Name" v-model="name">
          </div>
          <div class="md-form">
            <input type="text" class="form-control" placeholder="Email" v-model="email">
          </div>
          <div class="md-form">
            <input type="text" class="form-control" placeholder="Username" v-model="username">
          </div>
          <div class="md-form">
            <input type="password" class="form-control" placeholder="Password" v-model="password">
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-default" type="submit" @click="forSignUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      name: '',
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    forSignUp () {
      let form = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('signup', form)
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
