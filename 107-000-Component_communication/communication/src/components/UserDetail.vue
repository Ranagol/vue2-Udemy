<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p><!-- we need to get this myName from the User component, in order for the switchName to be able to work-->
    </div>
</template>

<script>
    export default {
        props: {
            myName: {
                //VALIDATING PROPS
                type: String,// example for props validation. myName must be a string. Props has to be an object, if we validate it, it must not be an array. All this won't prevent the error, but we will receive a warning in the consol.
                required: true// this was our app won't accept empty '' strings
                //default: 'Anything'//if there is no requred, and if we receive an empty string, then the default will be 'Anything' 
            }
        },
        //props means properties, and by this we think about properties that were set up by other components, set from outside. So, props are used for communication between components. Props are similar like data, methods, components... Props will contain properties, which will be settable from outside. 'name' in the props must match {{ name }}. All this will give us acces to name, but we are not passing the name yet. This passing is happening in the User component, with the <app-user-detail :name="name"></app-user-detail>. 
        

        methods:{
            switchName(){
                return this.myName.split("").reverse().join(""); //with this.myName we can access myName like any other data property. With split("").reverse().join("") we will split myName by characters, reverse the order of the characters, and join them together. Things in props can be echoed, accessed, used for methods just like any other property
                
                //obviously this data will change, but the type of the data must not change. Our switchName() can only work with strings. So, if we pass a number or a boolean, our app will break. We must prevent this. So, we must validate the props that are coming in.
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
