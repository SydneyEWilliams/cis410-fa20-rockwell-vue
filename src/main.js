import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import axios from 'axios'
import store from './store.js'

//USE YOUR API END POINT FOR YOUR PROJECT FOR THIS BIT
axios.defaults.baseURL = 'https://cis410-fa20-oo-api.azurewebsites.net'; //have new one from Laurel, need to change end points

new Vue({
  el: '#app',
  router,
  store, //same words for key and value can be one word
  render: h => h(App)
})
