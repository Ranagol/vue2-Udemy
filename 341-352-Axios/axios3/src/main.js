import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import router from './router';
import store from './store';

axios.defaults.baseURL = 'https://axios3-24c7b.firebaseio.com';//we want to set up a base for axios, some global shit that will apply for every axios shit.this is our Firebase address, and this will be the base of all our axios work. In signup.vue and dashboard.vue we have axios.get('/users.json'), and in these cases the base 'https://axios3-24c7b.firebaseio.com' will be merged with '/users.json''/users.json', and as a result we will get 'https://axios3-24c7b.firebaseio.com/users.json'

axios.defaults.headers.common['Authorization'] = 'wtf is this'  //here we can set up some global headers for axios. common means all requests will be involved whatever is this.

axios.defaults.headers.get['Accepts'] = 'application/json'  //only get requests will... wtf and whatever



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
