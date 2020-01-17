import Vue from 'vue'
import App from './App.vue'

//We can also register filters globally. Like this:
Vue.filter('toLowercase', function(value){//to-lowercase will be the name of the globally registered filter
  return value.toLowerCase();//toLowerCase is a built in JS function
});

new Vue({
  el: '#app',
  render: h => h(App)
})
