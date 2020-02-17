<template>
    <div>
        <h3>Some User Details</h3>
        <p>User id:{{ $route.params.id }}</p><!--We don't store this id as a property. We could, and it would be OK, but we did not. $route.params.id can retrieve the id number from the url.-->
        
        <router-link 
            tag="button" 
            :to="'/user/' +  $route.params.id + '/edit'" 
            class="btn btn-primary">Edit user</router-link><!--we want to go to UserEdit.vue with this. We can see in routes.js that the url for the UserEdit.vue is /user/:id/edit. The :id in this url needs to dynamic. We are creating our wished user/:id/edit url from three parts: "'/user/' +  $route.params.id + '/edit'"
        -->


    </div>
    
</template>