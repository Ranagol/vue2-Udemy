<template>
  <ul class="nav nav-pills">
    <div>This is the Header.vue</div>
    <br>
    <router-link to="/" tag="li" active-class="active" exact ><a>Home</a></router-link><!--<router-link></router-link> is built in in Vue. tag="li" means that Vue will create an li item. -->
    <div>|</div>
    <router-link to="/user" tag="li" active-class="active" ><a>User</a></router-link>
    <div>|</div>
    
  </ul>
  
</template>