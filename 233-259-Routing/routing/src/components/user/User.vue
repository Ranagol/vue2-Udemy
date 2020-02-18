<template>
    <div>
        <h1>The User Page (User.vue)</h1>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home page</button><!--In this example we want to go from this (User) page to the Home page, with a button click -->
        <hr>
        <router-view></router-view><!-- is a built in Vue thing. It allows us to load our router child views (UserEdit, UserDetail, UserStart) in the User.vue, which is in the App.vue-->
    </div>
</template>

<script>
//UserDetail, UserEdit, UserStart will be nested under User.vue, and they will have nested or child routes. So, we will have subroutes in the User.vue, which will enable us to load UserDetail, UserEdit, UserStart inside User.vue. First we have to configure subroutes in routes.js.
export default {
    methods: {
        navigateToHome(){
            this.$router.push({ name: 'home'}); //we are accesing this Vue instance (with this), and there we can acces our Vue router ($router). the / route is named home in routes.js, so we can use 'home' instead of /.
        }
    }
}
</script>