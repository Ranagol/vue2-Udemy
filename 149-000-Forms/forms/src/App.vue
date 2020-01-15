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
                            v-model.lazy="userData.email">
                    </div><!--v-model="userData.email"--this is the way how we can access grouped data. v-model updates with every key stroke. Sometimes we could want to update only when we finished the whole word, and moved to the next form field. We can achieve this with the .lazy . lazy will trigger only when we clicked somewhere else.-->
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
                            value="Male"> Male
                    </label>
                    <label for="female">
                        <input
                            type="radio"
                            id="female"
                            value="Female"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                        id="priority"
                        class="form-control">
                        <option></option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                        class="btn btn-primary">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>

        <!-- DATA DISPLAYING -->
        <div class="row">
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
                        <p>Gender:</p>
                        <p>Priority:</p>
                        <p>Switched:</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                userData:{//this is how we can group data in the data section
                    email: '',
                    password: '',
                    age:27
                },
                message:'A new message',//this is just a preppopulated text here, this will change...
                sendMail: [],
                
            }
        }
    }
</script>

<style>

</style>
