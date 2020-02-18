import Home from './components/Home.vue';
import Header from './components/Header.vue';

//LAZY LOADING
//Lazy loading is when we only load the parts that we need, not the whole page. Everything that is imported at the top of this page will be eagerly loaded, all of them and immediatelly. Now, Home and Header should be alway eagerly loaded, so we leave these two out of the group that we want to load lazily. All the user related things should be loaded on the lazy way.
const User = resolve => {//Here we are setting up the lazy loading for all the user related sites. This const is called User, because we want it to match with User.vue. The 'resolve' is passed in as argument into this function.

  require.ensure(['./components/user/User.vue'], () => {//in this array we set up the path that we want to load. We saying here: whenever we want to load this link /components/user/User.vue...

    resolve(require('./components/user/User.vue'));//... then execute this function. here we used the passed in 'resolve'. This has to be resolved, before executed. And this is the lazy loading.

  }, 'user');//this 'user' is the 3. argument and it is used for grouping the lazy load groups. Notice that all 4 user related shits are having this 3. 'user' argument. This way all the user related lazy shit will be loaded only once, in a group, and after that if we jump for example from UserEdit to User, nothing will be dowloaded from the net.
};

const UserStart = resolve => {
  require.ensure(['./components/user/UserStart.vue'], () => {
    resolve(require('./components/user/UserStart.vue'));
  }, 'user');
};

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit.vue'], () => {
    resolve(require('./components/user/UserEdit.vue'));
  }, 'user');
};

const UserDetail = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'));
  }, 'user');
};
//END OF LAZY LOADING

export const routes = [// the constant routes is an array that will store our routes. Every route will be an object.

  { path: '', name: 'home', components: {//the domain by itself will be the home, there is not need for additional link. If there is only the bare domain url, that will lead us to the home component. Also, we named the home route 'home'. 
  
  //Notice that here we have components: instead of component: . That is because we have here multiple component (we wan't our header in some case above, on the top, and in some cases below, in the bottom.)
    
    default: Home,//the default component is the Home component. Home.vue is imported at the top part as Home, so we can referr to Home.vue as Home...

    'header-top': Header//when we are in the Home (or / page), the 'header-top' (see in App.vue) is populated with Header.vue. The 'header-bottom is defined a few lines below this.
  } },

  { path: '/user', components: { 
    
    default: User,
    'header-bottom': Header//when we are in the User (or /user page), the 'header-bottom' (see in App.vue) is populated with Header.vue

  },children: [//children is an array of children routes, that will be nested after /user, see them below. The /user is the parent route, and these three routes (UserStart, UserDetail, UserEdit) below will be the children routes.

    { path: '', component: UserStart},//this will be actually just /user 

    { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {//2 option where to put the 'beforeEnter' route guard. We want to protect the UserDetail. So we add the 'beforeEnter' property. This 2 option is limited only to one route.

      console.log('inside UserDetail.vue activating route setup');
      next();
    } },

    { path: ':id/edit', component: UserEdit, name: 'userEdit'},//this will be /user/:id/edit. These three routes wont be placed in the App.vue, they will be placed in User.vue. With the name: 'userEdit' part we just name our route.

  ]},//------------------ end of children routes-----------------------
 
  { path: '/redirect-me', redirect: { name: 'home'} },//if the user requests /redirect-me url, he will be redirected to /. Problem: this works only with redirect-me url. It does not work with ANY non existent url. The solution is below: use *. * = anything.

  { path: '*', redirect: '/'}
  //--------------------end of redirecting-----------------------

  //sometimes we want to navigate to a specific part of a webpage. Then we use url + '#' + name of that element.

  











];