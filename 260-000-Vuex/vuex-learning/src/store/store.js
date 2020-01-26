//here we will need some helpers from the Vuex package
// how to install vuex: npm install --save vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//so, we imported Vue and Vuex, and after that we told Vue to use Vuex

new Vuex.Store({//this Store() is a special method, where we are passing an object as an argument. This Store() will handle the state of the application.
  state: {//this state property is built in, must be called state. In this state, we will store all the properties of our application
    counter: 0 //for example, this counter is actually in the App.vue data. So, with this, our counter is in the central store now.
  }
  
});