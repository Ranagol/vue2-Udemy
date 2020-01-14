<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <app-quote><!--We want to pass this block of code with html tags to the App.vue all together. Solution: slots -->
                    <h2>{{ quoteTitle }}</h2>
                    <p>A wonderful quote</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';//1 step of local component registration
    
    export default {

        data: function(){
            return {
                quoteTitle: 'The quote',
            }
        },

        components: {
            appQuote: Quote//we register here locally the Quote.vue (2 step)
        }
    }
</script>

<style>

h2{
  color: red;
}
</style>
