import Vue from 'vue';
import VueRouter from 'vue-router'; //since the vue-router is installed, we have to import it. Installing the vue-router with the 'npm install --save vue-router' command is the 1 step. 2 step is importing the vue-router (like here)...
import App from './App.vue';
import { routes } from './routes';//import the routes constant array from the routes.js

Vue.use(VueRouter);//... and this is the 3 step: enabling the vue-router. Now, we have to register (create) routes, in the routes.js, which will be imported into this main.js. 

const router = new VueRouter({//here we are creating our new VueRouter object. 
  routes,//this is the routes constant that we imported from routes.js
  mode: 'history',//We have 2 routing styles: one with the # ('hash', this is the default mode), and one without the #('history'). We can choose between these two styles, in this mode section. We have choosen 'history'.

  scrollBehavior(to, from, savedPosition){//wit this we can modify scroll behaviour

    if(savedPosition){// if there is a savedPosition, then scroll there
      return savedPosition;
    }
    if(to.hash){
      return { selector: to.hash };//if there is a hash (element id) already set up where to scroll, then cool, scroll there...
    }
    return { x:0, y:700,};//... otherwise, we return here an object that has x and y coordinates where we want Vue to scroll automatically 700 px down, if the route is loaded
  }
});

//1 option where to put before-enter route guard. This should be used for some generic checks. It is executed all the time, for all the routes, since it is executed before every route.
router.beforeEach((to, from, next) => {//beforeEach method in the router means execute this before each routing action that may occur. to=where we want to navigate. from= the route where we coming from. next = callback, that we can execute to let the request continue it's journey.

  console.log('global beforeEach');//for checking the activation of this guard in the console
  next();//important> next() must be executed to allow the routing action to continue its journey.
});

new Vue({
  el: '#app',
  router,//this is the router constant that we made a few lines above, and we are adding it to to our Vue instance
  render: h => h(App)
})
