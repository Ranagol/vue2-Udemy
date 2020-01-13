<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name in the child: {{ switchName() }}</p><!-- we need to get this myName from the User component, in order for the switchName to be able to work-->
        <p>User age: {{ userAge }}</p>

        <button @click="resetName">Reset name</button><!--We want to send info from the child to the parent. If this button is clicked, we want the username to be resetted in the User component -->

        <button @click="resetFn()">Reset name</button><!--this is an alternative instead of custom event listeners, we can pass info between the parent and the child with callback functions too. -->
    </div>
</template>

<script>
    import { eventBus } from '../main';//import the eventBus from main.js

    export default {
        props: {
            myName: {
                //VALIDATING PROPS
                type: String,// example for props validation. myName must be a string. Props has to be an object, if we validate it, it must not be an array. All this won't prevent the error, but we will receive a warning in the consol.
                required: true// this was our app won't accept empty '' strings
                //default: 'Anything'//if there is no requred, and if we receive an empty string, then the default will be 'Anything' 
            },

            resetFn: Function,//this is a validation, resetFn must be a function. This resetFn will be called with a button.

            userAge: Number
        },
        //props means properties, and by this we think about properties that were set up by other components, set from outside. So, props are used for communication between components. Props are similar like data, methods, components... Props will contain properties, which will be settable from outside. 'name' in the props must match {{ name }}. All this will give us acces to name, but we are not passing the name yet. This passing is happening in the User component, with the <app-user-detail :name="name"></app-user-detail>. 
        

        methods:{
            switchName(){
                return this.myName.split("").reverse().join(""); //with this.myName we can access myName like any other data property. With split("").reverse().join("") we will split myName by characters, reverse the order of the characters, and join them together. Things in props can be echoed, accessed, used for methods just like any other property
                
                //obviously this data will change, but the type of the data must not change. Our switchName() can only work with strings. So, if we pass a number or a boolean, our app will break. We must prevent this. So, we must validate the props that are coming in.
            },

            resetName(){
                this.myName = 'Max';//this will reset the name back to the old value. The only problem is, that this is happening in the child component, and the parent component doesn't know about it...

                this.$emit('nameWasReset', this.myName)// ...We must inform the parent component. We must emit a custom event. $emit() is a built in method in Vue. Here we can also pass a second argument, and now this will be the this.myName. In the User component something will listen to this event.
            }
        },

        created(){//this is a life cycle hook, that is needed for the event bus. 

            eventBus.$on('ageWasEdited', (age) => {
                
                this.userAge = age;//make the userAge from UserDetail = to age, aka userAge from UserEdit

            });//We want a listener here, that listens to event.Bus.emit('ageWasEdited', this.userAge );
            //(age) => { } this here is an ES6 callback, that will be executed when the emit will happen. This callback always gets the data that we have sent when emiting. This data is the 'this.userAge' from the UserEdit. 
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
