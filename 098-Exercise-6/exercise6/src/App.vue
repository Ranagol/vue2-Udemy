<template>
    <div class="container">

        <my-header></my-header>

        <hr>

        <my-Servers></my-servers>

        <my-server-details></my-server-details>
        <hr>

        <my-footer></my-footer>

    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    import Servers from './components/Servers.vue';
    import ServerDetails from './components/ServerDetails.vue';

    export default {
        components: {
            'my-header': Header,
            'my-servers': Servers,
            'my-server-details': ServerDetails,
            'my-footer': Footer,
        }
    }
</script>

<style>

</style>
