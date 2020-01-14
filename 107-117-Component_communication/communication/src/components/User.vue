<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name in the parent: {{ name }}</p>

        <hr>
        <div class="row"><!-- the User is the parent component. The UserDetail and the UserEdit are the child components. We want to pass information from the parent User component, to the child. To do this, we will have a button in the User, that will change the user name. This user name will be passed to the UserDEtail, from the User. -->
            <div class="col-xs-12 col-sm-6">

                <!--UserDetail child component -->
                <app-user-detail 
                    :myName="name" @nameWasReset="name=$event"
                    :resetFn="resetName" 
                    :userAge="age">
                </app-user-detail><!--Here we are passing the username from the User component to the UserDetail component. :myName=... is binded to the name property in the data. myName is what we have defined in UserDetails as an expected. ...="name" is a property from data. -->
                <!--@nameWasReset is an ordinary event listener, but now it is listening only for the this.$emit('nameWasReset'). -->
                <!--$event refers to the data which was passed through the event. (the second argument in the this.$emit('nameWasReset', this.myName)) -->
            </div>
            <div class="col-xs-12 col-sm-6">

                <!--UserEdit child component -->
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age=$event">
            
                </app-user-edit><!-- with the :userAge="age" we are sending the age property from this User comp. to the UserEdit comp, into the props. We are also sending the age to the UserDetail too.-->
                <!-- with the @ageWasEdited="age=$event" we are upating the age, receiving it from the UserEdit -->
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    export default {

        data: function(){//in order for the changeName() to work, we need the data section, that will be put into the export.
            return {
                name: 'Max',
                age: 27
            };
        },

        methods: {
            changeName(){
                this.name = 'Anna';
            },

            resetName(){//this is the same method that is in the UserDetail
                this.name = 'Max';
            }
        },

        components: {//local registration for the UserDetail and the USerEdit
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
