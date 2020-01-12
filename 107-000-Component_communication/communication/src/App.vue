<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <!--User component (parent for UserEdit and UserDetail) -->
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';

    export default {//local registration for the User component
        components: {
            appUser: User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
