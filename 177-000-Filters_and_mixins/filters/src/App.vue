<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters and mixins</h1>
                <p>{{ text | toUppercase }}</p><!-- | toUppercase this is how we activate our filter on the text data. -->

            </div>
        </div>
    </div>
</template>

<script>
//a filter can transform some outout into a template. Example, a filter takes a lowercase string and transforms it into uppercase string. Our filter should do this.
    export default {
        data(){
            return{
                text: 'Hello there!'
            }
        },

        filters:{
            toUppercase(value){//this will register our filter locally, so we will be able to use this filter only in this components template. The value argument is the data that we want to transform.
                
                return value.toUpperCase();// toUppercase is the filter name. toUppercase() is a built in method in JS. The similarity is a stupid coincidence, nothing more.
            }

        },
    }
</script>

<style>

</style>
