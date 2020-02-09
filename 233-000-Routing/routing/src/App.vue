<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <h5>Routing switches dynamically all the components below</h5>
                <hr>
                <app-header></app-header>
                <router-view></router-view><!--The routed components will be loaded here. The router-view is a built in component, it comes with Vue. Vue will load the component that has to be loaded into the <router-view></router-view> -->
            </div>
        </div>
    </div>
</template>

<script>
//Routing is dynamically switching these components (our pages, we have 5-7 of them...). We need to install the vue router with the 'npm install --save vue-router' command. This will enable single page features.
//App.vue is the main template! The plugged in components will not replace the whole page.
    import Header from './components/Header.vue';
    
    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
</style>
