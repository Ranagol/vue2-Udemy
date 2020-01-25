<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact ><a>Home</a></router-link><!--<router-link></router-link> is built in in Vue. tag="li" means that Vue will create an li item. -->
    <router-link to="/user/10" tag="li" active-class="active" ><a>User</a></router-link>
  </ul>
  
</template>