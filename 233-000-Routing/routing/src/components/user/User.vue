<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded id: {{ id }}</p>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home page</button>
    </div>
<!--Sometimes we want navigation or routing directly from our JS code, for example when some operation is finished, and we want to navigate away. In this example we want to go from this (User) page to the Home page, with a button click -->
</template>

<script>
export default {

    data(){
            return {
                //this here is about how to fetch the data from the url
                id: this.$route.params.id,//the id will the this. Vue instance's $route object's paramter's (yes, the $route object has a params object in it...) id, (which will be passed thorugh the url). Basically we are fetching an id number from the url, putting it into an id property. This id property can be {{}}
                //problem with this id: if we have user id 1 and user id 2, this id property is not updated accordingly. This is because the User.vue component is not updated/refreshed. Id must be updated, if it changes! Solution: set up a watcher.
            }
        },
    
    watch: {
        '$route'(to, from){//This is a function.Whenever the $route changes(example from /user/1 to user/2), update the id. (to, from) means from which route are we coming and to wich route are we going. The new params from the $route.params.id already has the new route in it.

            this.id = to.params.id;//id from the data/return (from above) = id from the new route
        } 
    },

    methods: {
        navigateToHome(){
            this.$router.push('/'); //we are accesing this Vue instance (with this), and there we can acces our Vue router ($router). '/' = because it means url for the home link
        }
    }
}
</script>