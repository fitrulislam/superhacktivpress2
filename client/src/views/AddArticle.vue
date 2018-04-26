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
    <section>
      <div class='container'>
        <div class="md-form">
          <input type="text" class="form-control" placeholder="title" v-model="title">
        </div>
        <div class="md-form">
          <input type="text" class="form-control" placeholder="category" v-model="category">
        </div>
        <div class="md-form">
          <textarea name="name" rows="8" cols="80" class="form-control" placeholder="content" v-model="content"></textarea>
        </div>
        <div class="mt-4">
          <button class="btn btn-sm btn-default" @click="addArticle">Add Article</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'addarticle',
  data () {
    return {
      title: '',
      content: '',
      category: ''
    }
  },
  methods: {
    addArticle () {
      let form = {
        title: this.title,
        content: this.content,
        category: this.category
      }
      this.$store.dispatch('addArticle', form)
      this.$router.push('myarticle')
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
