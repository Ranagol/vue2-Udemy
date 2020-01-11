import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';

Vue.component('app-server-status', Home)//here we are registering our Home component. app-server-status will be the selector in our whole app. Reminder: here the selector means that we can use <app-server-status></app-server-status> as our tag

new Vue({
  el: '#app',
  render: h => h(App)
})
