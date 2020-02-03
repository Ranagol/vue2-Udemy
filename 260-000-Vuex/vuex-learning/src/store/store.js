// how to install vuex: npm install --save vuex
import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as actions from './actions';//in actions.js we could have 10 or 20 functions - although we have only one in reality. With the * we can avoid calling every function separetly.
import * as getters from './getters';
import * as mutations from './mutations';


Vue.use(Vuex);//so, we imported Vue and Vuex, and after that we told Vue to use Vuex

//1 STEP
export const store = new Vuex.Store({//this Vuex.Store() is a special method, where we are passing an object as an argument. This Store() will handle the state of the application. Since we want to use all this on other components to, we have to export it.
//This is the central store here. This can became a pritty crowded place. So we can sort things in the central store by the tasks executed (for example, we have here counter related tasks and value related tasks), or we can sort things by actions, getters, mutations... Or we can mix this. In this example all the counter related stuff is in the counter.js, and all the value related stuff is in the actions.js, mutations.js, getters.js... We could also sort for example all the counter stuff by actions.js, mutations.js, getters.js...
  
  state: {//this state property is built in. In this 'state', we will store all the properties of our application
    
    value: 0,//this value will be used in our vuex store and the 2-way binding example.
  },

  getters,  
  mutations,
  actions,//for our actions to work (they are now in the actions.js), we have to import the actions.js on the top of this page

  modules: {
    counter,//with modules we are connecting our central store with all the counter stuff in the counter.js -> which will wit this connection become part of the central store. For this to happen, we also must import counter.js on the top of this page.
  }
});

