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
                id: this.$route.params.id,//the id will the this. Vue instance's $route object's paramter's (yes, the $route object has a params object in it...) id, (which will be passed thorugh the url)
            }
        },



    methods: {
        

        navigateToHome(){
            this.$router.push('/'); //we are accesing this Vue instance (with this), and there we can acces our Vue router ($router). '/' = because it means url for the home link
        }
    }
}
</script>