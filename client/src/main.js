import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/mdb.min.css'
import '@/assets/css/bootstrap-datetimepicker.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
