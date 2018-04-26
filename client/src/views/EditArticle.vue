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
        <form @submit.prevent="editArticle">
          <div class="md-form">
            <input type="hidden" class="form-control" name="id" placeholder="title" :value="article._id">
          </div>
          <div class="md-form">
            <input type="text" class="form-control" name="title" placeholder="title" :value="article.title">
          </div>
          <div class="md-form">
            <input type="text" class="form-control" name="category" placeholder="category" :value="article.category">
          </div>
          <div class="md-form">
            <textarea rows="8" cols="80" class="form-control" name="content" :value="article.content"></textarea>
          </div>
          <div class="mt-4">
            <button type="submit" class="btn btn-sm btn-default">Edit Article</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'editarticle',
  props: ['id'],
  computed: {
    article () {
      return this.$store.state.article
    }
  },
  methods: {
    editArticle (event) {
      let form = {
        title: event.target.elements.title.value,
        content: event.target.elements.content.value,
        category: event.target.elements.category.value
      }
      this.$store.dispatch('editArticle', [event.target.elements.id.value, form])
      this.$router.push('/myarticle')
    }
  },
  created: function () {
    this.$store.dispatch('getOneArticle', this.id)
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
