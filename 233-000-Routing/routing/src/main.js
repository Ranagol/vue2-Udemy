import Vue from 'vue';
import VueRouter from 'vue-router'; //since the vue-router is installed, we have to import it. Installing the vue-router with the 'npm install --save vue-router' command is the 1 step. 2 step is importing the vue-router (like here)...
import App from './App.vue';
import { routes } from './routes';//import the routes constant array from the routes.js

Vue.use(VueRouter);//... and this is the 3 step: enabling the vue-router. Now, we have to register routes, in the routes.js, which will be imported into the main.js. (The route registering can be done just in the main.js too)

const router = new VueRouter({//here we are creating our new VueRouter object
  routes//this is the routes constant that we imported from routes.js
});

new Vue({
  el: '#app',
  router,//this is the router constant that we made a few lines above, and we are adding it to to our Vue instance
  render: h => h(App)
})
