<template>
    <div>
        <p>AnotherResult.vue counter is: {{ doubleCounter }}</p><!--doubleCounter is directly from the Vuex getters -->
        <p>AnotherResult.vue number of clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';//here we are importing mapGetters function

    export default {

        computed: {

            //... tells JS: pull out all the properties and methods from this object here, and create separate key-value pairs for each of them. This way we can still have our computed properties beside the mapGetters - together. Without the ... it would not work.

            ...mapGetters([//here we are using the imported mapGetters() function. It uses an array [] as an argument. mapGetters will map all the functions from the getters, and with the mapGetters we can just simply get these functions

            'doubleCounter',
            'stringCounter'//this will create automatically computed properties to fetch these functions.
            ])
        }
        
    }
//problem1: we have code duplication: it is the same code in Result.vue and AnotherResult.vue (although the the result in the DOM is showing correctly.) This multiplying could be a big complex calculation, and that we don't want to repeat. Solution: a getter. See store.js for getters.

//So, now the computed properties are fetching the getters. For fetching we must use computed properties. We don't want computed properties to mediate between the {{ }} and the getters. Solution: Vuex has a method that will create all the compueted properties on by itself. For this, we will need the mapGetters frox Vuex. We have to import it.
</script>