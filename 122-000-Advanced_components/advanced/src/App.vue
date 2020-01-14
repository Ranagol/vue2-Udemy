<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <app-quote></app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';//1 step of local component registration
    
    export default {
        components: {
            appQuote: Quote//we register here locally the Quote.vue (2 step)
        }
    }
</script>

<style>
</style>
