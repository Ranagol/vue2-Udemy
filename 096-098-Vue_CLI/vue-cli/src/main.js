import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';

Vue.component('app-servers', Home)//here we are registering our Home component, globally. app-servers will be the selector in our whole app, for Home.vue. Reminder: here the selector means that we can use <app-servers></app-servers> as our tag

//ServerStatus is simulating 1 server, and it is sending it to Home. Home is multiplying this server x5, and sending all this to App.

//Home is registered globally, ServerStatus is registered locally (on Home.vue)

new Vue({
  el: '#app',
  render: h => h(App)
})
