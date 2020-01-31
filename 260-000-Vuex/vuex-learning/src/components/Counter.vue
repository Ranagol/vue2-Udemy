<template>
    <div>
        <p>Counter.vue: is doing the button logic. It is sending the data to Vuex store.</p>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        methods: {
            ...mapMutations([
                'increment',//@click="increment" from the button is calling this 'increment' here, and it will call the increment in the mutations.
                'decrement'
            ])
        }
    }
</script>