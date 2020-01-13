import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited, age');//now we have the emit logic in the eventBus
    }
    
  }
}); //Event bus topic: this Vue instance is for the eventBus only. We will create new, different Vue instance here (don't forget we already have the main Vue instance a few lines below), and we will store it in a constant, which will be exported. The event bus will allow us sibling communication. We don't need to define the necessary methods, because they are already defined in Vue.
//with the eventBus we are managing states of components (should the age be 27 or 30?). But even with eventBus all thic can be complicated. Solution: Vuex. eventBus is still ok for small or medium size apps, but for bigger apps we need Vuex.
//We can use eventBus to store some centralized data, or methods... Example: the use of the changeAge(). 

new Vue({//this is the Vue instance that hold all our components
  el: '#app',
  render: h => h(App)
})


