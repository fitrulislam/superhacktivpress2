<template>
<div class="container">
  <div style="height: 100vh">
    <div class="flex-center flex-column">
      <form @submit.prevent="formInput">
        <p class="h4 text-center mb-4">Sign in</p>
        <div class="md-form">
          <i class="fa fa-user prefix grey-text"></i>
          <input type="text" name="username" id="formUsername" class="form-control" placeholder="username">
        </div>
        <div class="md-form">
          <i class="fa fa-lock prefix grey-text"></i>
          <input type="password" name="password" id="formPassword" class="form-control" placeholder="password">
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-default" type="submit">Sign In</button>
        </div>
      </form>
      <div class="">
        <p>Don't have an account? Please
          <router-link to="/signup">Sign Up</router-link> or Login With: </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'signin'
}
</script>

<style scoped>
.container {
  max-width: 400px;
  height: 40rem;
  margin: 0 auto;
}

form {
  width: 400px;
  padding-bottom: 20px;
}
</style>
