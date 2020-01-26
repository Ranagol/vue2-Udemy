<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            counter(){
                return this.$store.state.counter * 2;
            }
        }
    }
//problem1: we have code duplication: it is the same code in Result.vue and AnotherResult.vue (although the the result in the DOM is showing correctly.) This multiplying could be a big complex calculation, and that we don't want to repeat. Solution: a Getter. See store.js for getters.
</script>