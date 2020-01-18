<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters and mixins from App.vue</h1>
                <p>Our text without filtering: {{ text}}</p>
                <p>Our text with the toUppercase filter: {{ text | toUppercase }}</p><!-- | toUppercase this is how we activate our filter on the text data. -->
                <p>Our text with multiple filters: {{ text | toUppercase | toLowercase }}</p><!-- Here we are using multiple filters. This is how we can chain filters-->
                <hr>
                <h3>Filtering with computed properties</h3>
                <!--Here we want to output our fruits as a list, and then filter it with an input field. -->
                <input v-model="filterText"><!--This will be used for filtering the fruits. Example: if we enter the letter 'm', we want to see only the fruits, that start with 'm'. Problem: Vue will activate the filter after every change in the DOM, that demands resources. The computed property way is better solution. -->
                <p>This is the unfiltered version of fruits</p>
                <ul>
                    <li v-for="fruit in fruits">{{ fruit }}</li>
                </ul>
                <p>This is the filtered version of fruits</p>
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
                <button @click="fruits.push('berries')">Add new item (Mixins and scope topic)</button><!--This fruits is the fruits array in the fruitMixin.js -->
                
            </div>
        </div>
    </div>
</template>

<script>
//a filter can transform some output into a template. Example, a filter takes a lowercase string and transforms it into uppercase string. Our filter should do this.

    import List from './List.vue';//here we imported the List component to our App.vue

    import { fruitMixin } from './fruitMixin';//import the fruitMixin constant from the fruitMixin.js file. This is the 2 step for the mixin: the importing.

    export default {
        mixins: [fruitMixin], //mixins is a built in array where we place our mixins. This is the 3 step for the mixin.

        data(){
            return{
                text: 'Hello there!',
                
            }
        },

        filters:{
            toUppercase(value){//this will register our filter locally, so we will be able to use this filter only in this components template. The value argument is the data that we want to transform.
                
                return value.toUpperCase();// toUpperCase is the filter name. toUpperCase() is a built in method in JS. The similarity is a stupid coincidence, nothing more.
            }
        },

        components: {//here we are registering locally the List component.
            appList: List//List will go into the <appList></appList>
        }
    }
</script>

<style>

</style>
