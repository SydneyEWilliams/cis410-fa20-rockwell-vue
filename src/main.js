import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import axios from 'axios'

//USE YOUR API END POINT FOR YOUR PROJECT FOR THIS BIT
axios.defaults.baseURL = 'https://cis410-fa20-rockwellapi.azurewebsites.net';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
