// how to install vuex: npm install --save vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//so, we imported Vue and Vuex, and after that we told Vue to use Vuex

//1 STEP
export const store = new Vuex.Store({//this Vuex.Store() is a special method, where we are passing an object as an argument. This Store() will handle the state of the application. Since we want to use all this on other components to, we have to export it.
  
  state: {//this state property is built in. In this 'state', we will store all the properties of our application
    
    counter: 0 //for example, first this counter was actually in the App.vue data. Now, this counter is in this central store now. We are receving all the changes here from Counter.vue and AnotherCounter.vue, and forwarding them to Result.vue and AnotherResult.vue.
  },

  getters: {//A getter gets the state form the store, does the calculation. Then this calculation is sent to the child property (to the Result.vue and to the AnotherResult.vue). Remeber: getters are getting the data from Vuex store, and manipulating with it. 

    doubleCounter: state => {//doubleCounter is an ES6 function. state is the argument.

      return state.counter * 2;
    },

    stringCounter: state => {
      return state.counter + ' Clicks';
    }
  },  

  mutations: {//at this point, Counter.vue is sending the data to Vuex store, and Result.vue and AnotherResult.vue are getting this data. But what if we are sending data to Vuex store from 2 places, not 1? That could be a problem. Mutations are receiving the data from Counter.vue and AnotherCounter.vue and after that, mutations are setting the data in Vuex store, which is very usefull if you have more than one data source. Mutates: it changes, mutates the data in Vuex store.
    
    increment: (state, payload) => {//this is a function called increment. The state is the argument. We received the payload fro actions/increment as an argument, through commiting...

      state.counter+= payload;//...and here we are using the payload
    },

    decrement: (state, payload) => {//From now on, these central increment and decrement functions will be called from Counter.vue
      state.counter-= payload;
    }
  },
//Problem with mutations: they can't be async. Aka mutation function can't be delayed in time, they have to change the state immediatelly. But what if we need to run async tasks too? How to combine async tasks with mutations? We need to put something (Actions) between our trigger child component and the mutations. In Actions we can run delayed (async) tasks. From Actions we only commit the mutations when the task is done. Example for this: we want our button behaviour to be delayed for 1 second.

  actions: {//they are used for delayed tasks, and also they could be used for not delayed tasks too - and this is advised to do. Always use actions, even when there are no time delayed tasks. In this case AnotherCounter is sending the delayed tasks to asyncIncrement and asyuncDecrement, and Counter is sending his shit to increment and decrement functions.

    //THESE TWO ARE NOT DELAYED
    increment: ({ commit }, payload) =>{//payload is the argument(100) from the button @click="increment(100) on AnotherCounter.vue. So, we received payload here, and we are forwarding it...

      commit('increment', payload);//...to here. Hmmm. We are commiting our shit from action increment to mutations increment.
    },
    
    decrement: ({ commit }, payload) =>{
      commit('decrement', payload);
    },

    //THESE TWO ARE DELAYED 
    asyncIncrement: ({ commit }, payload) =>{//here we are receiving directly the commit as argument
      setTimeout(() => {
        commit('increment', payload.by);
      },payload.duration);//the asyncIncrement and the increment function are the same, the only difference is, that the asyncIncrement is delayed. In this case, we are receiving a payload object {by: 50, duration: 500} from anotherCounter.vue, which is the payload here. payload.by means that we are calling the by key from the payload object. payload.duration is the duration key from the payload object.
    },

    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration);
    }
  }
});

