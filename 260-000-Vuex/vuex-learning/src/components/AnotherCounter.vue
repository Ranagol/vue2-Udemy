<template>
    <div>
        <hr>
        <p>AnotherCounter.vue: is doing the button logic too. It is ALSO sending the data to Vuex store.</p>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        methods: {
             ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>