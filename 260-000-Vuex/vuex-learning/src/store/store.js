//here we will need some helpers from the Vuex package
// how to install vuex: npm install --save vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//so, we imported Vue and Vuex, and after that we told Vue to use Vuex

//1 STEP
export const store = new Vuex.Store({//this Store() is a special method, where we are passing an object as an argument. This Store() will handle the state of the application. Since we want to use all this on other components to, we have to export it.
  
  state: {//this state property is built in, must be called state. In this state, we will store all the properties of our application
    
    counter: 0 //for example, this counter is actually in the App.vue data. So, with this, our counter is in the central store now.
  },

  getters: {//A Getter gets the state form the store, does the calculation. Then this calculation is sent to the child property. Remeber: getters are getting the data from Vuex store, and manipulating with it if necesarry. Mutations are setting the data in Vuex store, which is very usefull if you have more than one data source. Mutates: it changes, mutates the data in Vuex store.

    doubleCounter: state => {//doubleCounter is an ES6 function. state is the argument.

      return state.counter * 2;
    },

    stringCounter: state => {
      return state.counter + ' Clicks';
    }
  },  
  mutations: {//at this point, Counter.vue is sending the data to Vuex store, and Result.vue and AnotherResult.vue are getting this data. But what if we are sending data to Vuex store from 2 places, not 1? That could be a problem.
    
    increment: state => {//this is a function called increment. The state is the argument.
      state.counter++;
    },

    decrement: state => {//From now on, these central increment and decrement functions will be called from Counter.vue
      state.counter--;
    }
  }
});

