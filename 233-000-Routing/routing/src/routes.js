import User from './components/user/User.vue';//in order to use the User.vue, we have to import here the User.vue
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';

export const routes = [// the constant routes is an array that will store our routes. Every route will be an object.

  { path: '', component: Home},//the domain by itself will be the home, there is not need for additional link. If there is only the bare domain url, that will lead us to the home component.

  { path: '/user', component: User, children: [//children is an array of children routes, that will be nested after /user. The /user is the parent route, and these three routes below will be the children routes.

    { path: '', component: UserStart},//this will be actually just /user 
    { path: ':id', component: UserDetail},//this will be /user/:id (we are adding up parent url /user with the child url /:id)
    { path: ':id/edit', component: UserEdit},//this will be /user/:id/edit. These three routes wont be placed in the App.vue, they will be placed in User.vue

  ]},//sometimes we want to pass data in/with the url, for example an id. Example user/10. So we could load this user page. In this case we would use '/user/:id' will be a dynamic piece, we need it for passing id's.

];