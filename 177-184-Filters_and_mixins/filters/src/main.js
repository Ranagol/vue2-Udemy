import Vue from 'vue'
import App from './App.vue'

//We can also register filters globally. Like this:
Vue.filter('toLowercase', function(value){//to-lowercase will be the name of the globally registered filter
  return value.toLowerCase();//toLowerCase is a built in JS function
});

//Mixins can be too registered globally. Global mixins are added to every instance in our app. We want to avoid this. Local mixins are better usually, because here we can decide where to add our mixin, and where not to add.
Vue.mixin({
  created(){
    console.log('Created logged from global mixin');//this is now added to all instances already... This will appear 3x in the consol. Because, there are 3 Vue instances: one in main.js, List.vue, App.vue. Global mixins are called first, then local mixins, then the code written into instances.
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
