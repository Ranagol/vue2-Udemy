<template>
  <ul class="nav nav-pills bg-secondary">
    <br>
    <router-link to="/" tag="li" active-class="active" exact ><a><h4>Home</h4></a></router-link><!--<router-link></router-link> is built in in Vue. tag="li" means that Vue will create an li item. -->
    <div>|</div>
    <router-link to="/user" tag="li" active-class="active" ><a><h4>User</h4></a></router-link>
    <div>|</div>
    <div>(Header.vue)</div>
  </ul>
  
</template>