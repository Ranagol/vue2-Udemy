<template>
  <ul class="nav nav-pills">
    <div>This is the Header.vue</div>
    <router-link to="/" tag="li" active-class="active" exact ><a>Home</a></router-link><!--<router-link></router-link> is built in in Vue. tag="li" means that Vue will create an li item. -->
    <div>|</div>
    <router-link to="/user/1" tag="li" active-class="active" ><a>User 1</a></router-link>
    <div>|</div>
    <router-link to="/user/2" tag="li" active-class="active" ><a>User 2</a></router-link>
  </ul>
  
</template>