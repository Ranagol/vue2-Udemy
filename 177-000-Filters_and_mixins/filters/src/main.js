import Vue from 'vue'
import App from './App.vue'

//We can also register filters globally. Like this:
Vue.filter('to-lowercase');//to-lowercase will be the name of the globally registered filter

new Vue({
  el: '#app',
  render: h => h(App)
})
