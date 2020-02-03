<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex (from App.vue)</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
                <hr>
<!--2way binding and the store problem: it won't work with the usual setup. Solution: we have to create getters and setter in the computed property-->
                <input type="text" :value="value" @input="updateValue">
                <p>{{ value }}</p>

            </div>
        </div>
    </div>
</template>
 
<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';


    export default {
        computed: {
            value: {//...is called value, because we are changing the value property
                get(){//getter created in computed properties for the value
                    return this.$store.getters.value;
                },

                set(value){//setter created in computed properties for the value
                    this.$store.dispatch('updateValue', value);
                }
            }
        },

        methods: {//this works, but it is not needed, because there is a better solution.
            updateValue(event){
                this.$store.dispatch('updateValue', event.target.value);//event.target.value is from the 
            }
        },

        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult,
        }
    }
</script>

