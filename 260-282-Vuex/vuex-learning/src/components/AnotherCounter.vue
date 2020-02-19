<template>
    <div>
        <hr>
        <p>AnotherCounter.vue: is doing the button logic too. It is ALSO sending the data to Vuex store. This is the DELAYED version. </p>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">asyncIncrement</button><!--This is the way how we can send more than one argument or payload from here to vuex store. Change by 50, and make the delay time 500 ms.  -->
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">asyncDecrement</button>
    </div>
</template>

<script>
//The AnotherCounter.vue was connected directly with mutations. But now, we will use here async/delayed functions, so we must connect the AnotherCounter.vue with actions, instead of mutations. So we import mapActions.

    import { mapActions } from 'vuex';//mapActions is working with delayed functions. We are also importing here the functions from actions. We could not use these increment and decrement function without the import { mapActions }part

    export default {
        methods: {
             ...mapActions([
                'asyncIncrement',//soooo... It seems to me that the @click="asyncIncrement">asyncIncrement</button> from the top will activate this 'asyncIncrement', which will lead to asyncIncrement function in the actions.
                'asyncDecrement'
            ]),
        }
    }
</script>