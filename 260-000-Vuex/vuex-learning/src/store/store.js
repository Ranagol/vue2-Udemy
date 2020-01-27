// how to install vuex: npm install --save vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//so, we imported Vue and Vuex, and after that we told Vue to use Vuex

//1 STEP
export const store = new Vuex.Store({//this Vuex.Store() is a special method, where we are passing an object as an argument. This Store() will handle the state of the application. Since we want to use all this on other components to, we have to export it.
  
  state: {//this state property is built in. In this 'state', we will store all the properties of our application
    
    counter: 0 //for example, first this counter was actually in the App.vue data. Now, this counter is in this central store now. We are receving all the changes here from Counter.vue and AnotherCounter.vue, and forwarding them to Result.vue and AnotherResult.vue.
  },

  getters: {//A getter gets the state form the store, does the calculation. Then this calculation is sent to the child property. Remeber: getters are getting the data from Vuex store, and manipulating with it. 

    doubleCounter: state => {//doubleCounter is an ES6 function. state is the argument.

      return state.counter * 2;
    },

    stringCounter: state => {
      return state.counter + ' Clicks';
    }
  },  

  mutations: {//at this point, Counter.vue is sending the data to Vuex store, and Result.vue and AnotherResult.vue are getting this data. But what if we are sending data to Vuex store from 2 places, not 1? That could be a problem. Mutations are setting the data in Vuex store, which is very usefull if you have more than one data source. Mutates: it changes, mutates the data in Vuex store.
    
    increment: state => {//this is a function called increment. The state is the argument.
      state.counter++;
    },

    decrement: state => {//From now on, these central increment and decrement functions will be called from Counter.vue
      state.counter--;
    }
  },
//Problem with mutations: they can't be async. Aka mutation function can't be delayed in time, they have to change the state immediatelly. But what if we need to run async tasks too? How to combine async tasks with mutations? We need to put something (Actions) between our trigger child component and the mutations. In Actions we can run delayed (async) tasks. From Actions we only commit the mutations when the task is done. Example for this: we want our button behaviour to be delayed for 1 second.

  actions: {//they are used for delayed tasks
    //THESE TWO ARE NOT DELAYED
    increment: context => {//althoguh there is an increment function in mutations too, there is no conflict, because that is in a different object. With the increment in the actions we are calling the increment in mutations????

      context.commit('increment');//context is givig us acces to commit(). Context is an object.
    },
    
    decrement: context => {
      context.commit('decrement');
    },


    //THESE TWO ARE DELAYED (also: the context and the ({ commit}) are giving the same result.)
    asyncIncrement: ({ commit }) =>{//here we are receiving directly the commit as argument
      setTimeout(() => {
        commit('increment');
      },1000);//the asyncIncrement and the increment function are the same, the only difference is, that the asyncIncrement is delayed
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    }
  }
});

