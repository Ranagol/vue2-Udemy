<template>
    <p>Result.vue counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter(){
                return this.$store.getters.doubleCounter;//A getter gets the state form the store, does the calculation. Then this calculation is sent to the child property. Return the doubleCounter, which is in the central store, in the getters
            }
        }
    }
</script>