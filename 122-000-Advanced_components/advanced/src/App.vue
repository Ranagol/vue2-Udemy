<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <button @click="selectedComponent='appQuote'">Quote</button>
                <button @click="selectedComponent='appAuthor'">Author</button>
                <button @click="selectedComponent='appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <component :is="selectedComponent">
                    <p>Default component</p>
                </component><!-- this is a reserved tag for dynamic Vue component, that will allow us to change component display. We binded this component to selectedComponent property with this part: :is="selectedComponent"-->
                <!--We want to pass this block of code with html tags to the App.vue all together. Solution: slots -->
                <!--
                <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p>A wonderful quote</p>
                </app-quote>
                -->
            </div>
        </div>
    </div>
</template><!--We have 3 components. We want to dynamically decide which component we want to display here, depending on which button was pressed. For this, we use dynamic components. -->

<script>
    import Quote from './components/Quote.vue';//1 step of local component registration
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {

        data: function(){
            return {
                quoteTitle: 'The quote',
                selectedComponent: 'appQuote'//...will be displayed dynamically a selected component. By default it shows 'app-quote'.
            }
        },

        components: {
            appQuote: Quote,//we register here locally the Quote.vue (2 step). The Qute.vue will go to the <appQuote></appQuote>
            appAuthor: Author,//for Vue appAuthor = app-author, he just knows...
            appNew: New//...or appNew = app-new
        }
    }
</script>

<style>

h2{
  color: red;
}
</style>
