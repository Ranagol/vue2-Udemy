<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <br>
                <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="selectedComponent = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <p>{{ selectedComponent }}</p>
                <hr>
                <component :is="selectedComponent"></component>
                <hr>
                <app-blue></app-blue>
                <app-green></app-green>
                <app-red></app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function(){
            return {
                selectedComponent: 'appBlue',
            }
        },
        
        
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
