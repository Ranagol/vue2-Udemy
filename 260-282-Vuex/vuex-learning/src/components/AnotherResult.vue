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
            //the three dots below ...mapGetters tells JS: pull out all the properties and methods from this object here, and create separate key-value pairs for each of them. This way we can still have our computed properties beside the mapGetters - together. Without the ... it would not work.

            ...mapGetters([//here we are using the imported mapGetters() function. It uses an array [] as an argument. mapGetters will map all the functions from the getters, and with the mapGetters we can just simply get these functions. A getter gets the state form the store, does the calculation. Then this calculation is sent to the child property. This will create automatically computed properties to fetch these functions.

            'doubleCounter',// use the 'doubleCounter' from the getters.
            'stringCounter'//use the 'stringCounter' from the getters.
            ])
        }
    }
//We don't want computed properties to mediate between the {{ }} and the getters. Solution: Vuex has a method that will create all the computed properties on by itself. For this, we will need the mapGetters frox Vuex. We have to import it.
</script>