import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

import router from './router';
import store from './store';

axios.defaults.baseURL = 'https://axios3-24c7b.firebaseio.com';//we want to set up a base for axios, some global shit that will apply for every axios shit.this is our Firebase address, and this will be the base of all our axios work. In signup.vue and dashboard.vue we have axios.get('/users.json'), and in these cases the base 'https://axios3-24c7b.firebaseio.com' will be merged with '/users.json''/users.json', and as a result we will get 'https://axios3-24c7b.firebaseio.com/users.json'

axios.defaults.headers.common['Authorization'] = 'wtf is this'  //here we can set up some global headers for axios. common means all requests will be involved whatever is this.

axios.defaults.headers.get['Accepts'] = 'application/json'  //only get requests will... wtf and whatever
//aha. Chrome/Console/Network/users.json/Headers/Request Headers: here we will have: Authorization: wtf is this and Accepts: application/json. This is what we set up here...

//INTERCEPTORS
//..are functions, that should get executed when request is being sent to Firebase, or response being received from Firebase. Interceptors are like middleware.
const requestInterceptptor = axios.interceptors.request.use(config => {//use this function, when intercepting. This is for intercepting a request
  console.log('Displaying request interceptor', config);
  
  return config;//we always must return the config, otherwise all will break
}); 

const responseInterceptor = axios.interceptors.response.use( res => {//this is for intercepting a response
  console.log('Displaying RESPONSE interceptor',res);
  
  return res;//we always must return the res, otherwise all will break
});
axios.interceptors.request.eject(requestInterceptptor);  //Now, sometimes, we want to instantly remove interceptors
axios.interceptors.response.eject(responseInterceptor);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
