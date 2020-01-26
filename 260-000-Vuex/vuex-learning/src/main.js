import Vue from 'vue'
import App from './App.vue'

//2 STEP
import { store } from './store/store';//now that we have exported the store from store.js, we have to register it here. Import the store constant, which is in the store folder, in the store.js file.

new Vue({
  el: '#app',
  store, //3 STEP: registering the store here
  render: h => h(App)
})
