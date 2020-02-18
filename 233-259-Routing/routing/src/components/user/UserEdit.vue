<template>
    <div>
        <h3>Edit the User(UserEdit.vue)</h3>
        <p>Below we will output dynamically data from the url query parameters, which was sent from UserDetail to UserEdit:</p>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 50px;"></div>
        <p id="data">This is a p tag with id="data" for testing the #</p>
    </div>
</template>

<script>
//here we want to check if a user is allowed to leave this route - this is not an authentication depending thing, this is more like preventing accidentally leaves from the page
export default {
    data(){
        return {
            confirmed: false//by default this is false, because we don't want our user to leave this site accidentally
        }
    },
    beforeRouteLeave(to, from, next) {//this is deciding if the user is allowed to go somewhere else
        if(this.confirmed) {//if this.confirmed is true...(this can be set up with a previous 'Confirm' button click, or additional confirmation <-this.confirmed is creating a confirmation request)
            next();
        } else {
            if (confirm('Are you sure?')) {//here the user is confirming that yes he really wants to go away... wtf? OK, this is just supposed to prevent accidentaly navigation away, something like when the user clicked accidentaly on the 'back' option in the browser
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>