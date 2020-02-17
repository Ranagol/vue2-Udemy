<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
        <!--We want to be able to click on User 1 or 2 or 3, and to load the given user's details. tag="li" means that these are list items in <ul></ul>. to='/user -->
            <router-link 
                tag="li" 
                to="/user/1"
                class="list-group-item" 
                style="cursor: pointer">User 1</router-link>
            <router-link 
                tag="li" 
                to="/user/2"
                class="list-group-item" 
                style="cursor: pointer">User 2</router-link>
            <router-link 
                tag="li" 
                to="/user/3"
                class="list-group-item" 
                style="cursor: pointer">User 3</router-link>
        </ul>
    </div>
</template>