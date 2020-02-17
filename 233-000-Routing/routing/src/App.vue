<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <h5>Routing switches dynamically all the components below (all this is in App.vue)</h5>
                <hr>
                
                <router-view name="header-top"></router-view><!--This is for our Header.vue in all cases, except where we are in users. In that case we don't want our Header.vue on the top, we want it on the bottom. For this, we use named router views. Now we just have to assign these names to these routes, in routes.js -->
                
                <transition name="slide" mode="out-in"><!--This is for creating transition animations when changing route. The previous site will fade out, slide out, the next page will slide in, fade in. -->
                    <router-view></router-view><!--The routed components will be loaded here. The router-view is a built in component, it comes with Vue. Vue will load the component that has to be loaded into the <router-view></router-view>. This routerview is unnamed, because this is the default router view, where everything loads -->
                </transition>
                

                <router-view name="header-bottom" ></router-view><!--This is the second named router view, under the default router view for the case when we are in users, when we want our Header.vue to be in the bottom -->
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
    .slide-leave-active {
        transition: opacity 1s ease;
        opacity: 0;
        animation: slide-out 1s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
