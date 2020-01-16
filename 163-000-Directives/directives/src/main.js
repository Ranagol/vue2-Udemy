import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{//first argument is the name of the directive (without the v- part).

});

new Vue({
  el: '#app',
  render: h => h(App)
})
