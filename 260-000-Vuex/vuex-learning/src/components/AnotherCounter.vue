<template>
    <div>
        <hr>
        <p>AnotherCounter.vue: is doing the button logic too. It is ALSO sending the data to Vuex store.</p>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
//The AnotherCounter.vue was connected directly with mutations. But now, we will use here async/delayed functions, so we must connect the AnotherCounter.vue with actions. So we import mapActions.
    import { mapActions } from 'vuex';//mapActions is working with delayed functions
    import { mapMutations } from 'vuex';//is sending data to the central store
    export default {
        methods: {
             ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>