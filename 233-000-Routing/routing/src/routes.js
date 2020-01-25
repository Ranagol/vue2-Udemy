import User from './components/user/User.vue';//in order to use the User.vue, we have to import here the User.vue
import Home from './components/Home.vue';

export const routes = [// the constant routes is an array that will store our routes. Every route will be an object.

  { path: '', component: Home},//the domain by itself will be the home, there is not need for additional link. If there is only the bare domain url, that will lead us to the home component.
  { path: '/user', component: User},//for the user url load the User.vue component
  
];