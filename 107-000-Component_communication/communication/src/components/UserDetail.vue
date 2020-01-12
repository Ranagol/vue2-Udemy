<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ myName }}</p><!-- we need to get this name from the User component-->
    </div>
</template>

<script>
    export default {
        props: ['myName']//props means properties, and by this we think about properties that were set up by other components, set from outside. So, props are used for communication between components. Props are similar like data, methods, components... Props here is an array. Props array will contain properties, which will be settable from outside. 'name' in the props must match {{ name }}. All this will give us acces to name, but we are not passing the name yet. This passing is happening in the User component, with the <app-user-detail :name="name"></app-user-detail>.
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
