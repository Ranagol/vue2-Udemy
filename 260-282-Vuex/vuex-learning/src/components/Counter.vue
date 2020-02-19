<template>
    <div>
        <p>Counter.vue: is doing the button logic. It is sending the data to Vuex store.</p>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';//we are importing the methods from the counter mutations in the central store
    export default {
        methods: {
            ...mapMutations([//use the methods that we imported above with mapMutations
                'increment',//@click="increment" from the button is calling this 'increment' here, and this 'increment' here will call the increment in the mutations.
                'decrement'
            ])
        }
    }
</script>