import User from './components/user/User.vue';//in order to use the User.vue, we have to import here the User.vue
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

export const routes = [// the constant routes is an array that will store our routes. Every route will be an object.

  { path: '', name: 'home', components: {//the domain by itself will be the home, there is not need for additional link. If there is only the bare domain url, that will lead us to the home component. Also, we named the home route 'home'. 
  
  //Notice that here we have components: instead of component: . That is because we have here multiple component (we wan't our header in some case above, on the top, and in some cases below, in the bottom.)
    
    default: Home,//the default component is the Home component. Home.vue is imported at the top part as Home, so we can referr to Home.vue as Home...

    'header-top': Header//when we are in the Home (or / page), the 'header-top' (see in App.vue) is populated with Header.vue
  } },

  { path: '/user', components: { 
    
    default: User,
    'header-bottom': Header//when we are in the User (or /user page), the 'header-bottom' (see in App.vue) is populated with Header.vue

  },children: [//children is an array of children routes, that will be nested after /user, see them below. The /user is the parent route, and these three routes (UserStart, UserDetail, UserEdit) below will be the children routes.

    { path: '', component: UserStart},//this will be actually just /user 

    { path: ':id', component: UserDetail},//this will be /user/:id (we are adding up parent url /user with the child url /:id). sometimes we want to pass data in/with the url, for example an id. Example user/10. So we could load this user page. In this case we would use '/user/:id' will be a dynamic piece, we need it for passing id's.

    { path: ':id/edit', component: UserEdit, name: 'userEdit'},//this will be /user/:id/edit. These three routes wont be placed in the App.vue, they will be placed in User.vue. With the name: 'userEdit' part we just name our route.

  ]},//------------------ end of children routes-----------------------
 
  { path: '/redirect-me', redirect: { name: 'home'} },//if the user requests /redirect-me url, he will be redirected to /. Problem: this works only with redirect-me url. It does not work with ANY non existent url. The solution is below: use *. * = anything.

  { path: '*', redirect: '/'}

];