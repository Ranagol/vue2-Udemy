<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ userAge }}</p>
        <button @click="editAge">Edit age</button><!--at first, if we click on this button, itt will change the userAge here, but not on the UserDetail. We want to send this data to the UserDetail. Unfortunatelly,this is not possible directly. So, we will emit an ageWasEdited event in the editAge()...-->
    </div>
</template>

<script>
    import { eventBus } from '../main';//import the eventBus from main.js

    export default{
        props: ['userAge'],
        methods:{
            editAge(){
                this.userAge = 30;//the age is stored in the parent component, we will receive it into the props, under 'userAge'
                //this.$emit('ageWasEdited', this.userAge );//we are sending this event and the userAge to the User. But. We don't need this any more, because we will use eventBus
                //eventBus.$emit('ageWasEdited', this.userAge );//we can comment this out too, because we put the $emit logic into the eventBus, on the main.js page. Instead of this, we can do the next:
                eventBus.changeAge(this.user.Age);
            }
        }
    }

</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
