<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>

        <hr>
        <div class="row"><!-- the User is the parent component. The UserDetail and the UserEdit are the child components. We want to pass information from the parent User component, to the child. To do this, we will have a button in the User, that will change the user name, and that will be passed to the UserDEtail, from the User. We don't want to echo the user name in the User component, instead we want this to be echoed in the UserDetail. -->
            <div class="col-xs-12 col-sm-6">

                <!--UserDetail child component -->
                <app-user-detail></app-user-detail>

            </div>
            <div class="col-xs-12 col-sm-6">

                <!--UserEdit child component -->
                <app-user-edit></app-user-edit>

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
            };
        },

        methods: {
            changeName(){
                this.name = 'Anna';
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
