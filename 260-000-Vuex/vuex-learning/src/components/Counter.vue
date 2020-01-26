<template>
    <div>
        <p>Counter.vue: is doing the button logic</p>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.state.counter++;//in Vue a $ is a sign, that this object is not something that we created, this is built in Vue. This function now is accessing the central store, and updating the counter property there.
            },
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>