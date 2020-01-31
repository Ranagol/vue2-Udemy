<template>
    <div>
        <hr>
        <p>AnotherCounter.vue: is doing the button logic too. It is ALSO sending the data to Vuex store.</p>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
//The AnotherCounter.vue was connected directly with mutations. But now, we will use here async/delayed functions, so we must connect the AnotherCounter.vue with actions, instead of mutations. So we import mapActions.

    import { mapActions } from 'vuex';//mapActions is working with delayed functions. We are also importing here the functions from actions. We could not use these increment and decrement function without the import { mapActions }part

    export default {
        methods: {
             ...mapActions([
                'increment',//soooo... It seems to me that the @click="increment">Increment</button> from the top will activate this 'increment', which will lead to increment function in the actions.
                'decrement'
            ]),
            
        }
    }
</script>