<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                            type="text"
                            id="email"
                            class="form-control"
                            :value="userData.email"
                            @input="userData.email = $event.target.value">
                    </div>
<!--v-model="userData.email"--this is the way how we can access grouped data. v-model updates with every key stroke. Sometimes we could want to update only when we finished the whole word, and moved to the next form field. We can achieve this with the .lazy . lazy will trigger only when we clicked somewhere else.-->
<!-- we can change v-model="userData.email" to a v-bind and a @input element. It will be the same. $event.target.value is the way how we can acces the data from the input field.-->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            v-model="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            class="form-control"
                            v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    
                    <textarea
                        id="message"
                        rows="5"
                        class="form-control"
                        v-model="message">
                    </textarea><!-- With <textarea>{{ thisTypeOfEchoing }}</textarea> doesn't work!, we must use v-model.-->
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                type="checkbox"
                                id="sendmail"
                                value="SendMail"
                                v-model="sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                type="checkbox"
                                id="sendInfomail"
                                value="SendInfoMail"
                                v-model="sendMail"> Send Infomail
                        </label><!--Here the use decides which type of mail he would like to receive. We want to put this 'SendMail' and 'SendInfomail' input values (so both, together!) into the sendMail array in the data. Later, in the 'Your data displayed' we will use v-for to display these input values -->
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                            type="radio"
                            id="male"
                            value="Male"
                            v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                            type="radio"
                            id="female"
                            value="Female"
                            v-model="gender"> Female
                    </label>
                    <!--The difference between checkboxes and radio buttons is, that we can select only one button. (Example: male/female). Here we are using the same v-model for the male and the female. By doing this, we are letting Vue to know, that these two radio buttons belong together, and Vue will do everything else automatically.-->
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                        id="priority"
                        class="form-control"
                        v-model="selectedPriority">
                        <option 
                            v-for="priority in priorities" 
                            :selected="priority == 'medium'">{{ priority }}
                        </option>
                    </select>
                    <!--We want 2 things here. We want to get the value and we want Vue to populate the dropdown menu with options. We want to add options dynamically with v-for="priority in priorities". With the :selected="priority == 'medium'  we are deciding what should be the default displayed value in the dropdown menu. Important: we don't use v-model in the <option></option>, we use it in the <select></select>. So, the v-model="selectedPriority" in the select tag is getting us the value. -->

                    <!--*******OUR CUSTOM SWITCH****** -->
                    <app-switch v-model="dataSwitch"></app-switch>

                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                        class="btn btn-primary"
                        @click.prevent="submitted">Submit!
                    </button><!--Right now we don't use this submit button. We need to connect it with our data. We don't want this button to submit to the server, because we want to handle this data in Vue. So we prevent this default behaviour, and let Vue take care of things. -->
                </div>
            </div>
        </form>
        <hr>

        <!------------------------------ DATA DISPLAYING---------------------- -->
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your data displayed</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }}</p><!-- this is how we can echo grouped data -->
                        <p>Password: {{ userData.password }} </p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space: pre">Message: {{ message }} </p><!--Problem: we don't echo line breaks. Solution: we do this CSS trick with the style="white-space: pre"-->
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail">{{ item }}</li>
                        </ul>
                        <p>Gender:{{ gender }}</p>
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched:{{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//We want to build our custom input element.
    import Switch from './Switch.vue';

    export default {
        data(){
            return{
                userData:{//this is how we can group data in the data section
                    email: '',
                    password: '',
                    age:27
                },
                message:'A new message',//this is just a prepopulated text here, this will change...
                sendMail: [],
                gender: 'Male',
                selectedPriority: 'high',//this is the selected priority, and it is set to high by default. This 'high' default setting will overwrite the 'medium' default setting, written in the <option></option>
                priorities: ['high', 'medium', 'low'],//these will be our options in the Priority dropdown menu
                dataSwitch: true,//this is needed for the custom switch
                isSubmitted: false,//we will use this to conditionally show the "Your data displayed" section
            }
        },

        methods:{
            submitted(){
               this.isSubmitted = true; 
            }
        },

        components: {
            appSwitch: Switch
        }
    }
</script>

<style>

</style>
