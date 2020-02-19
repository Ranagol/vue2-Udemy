<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
  </div>
</template>

<script>
//we sent with axios user data to Firebase. We now want to get this data from Firebase, to display it here.
import axios from 'axios';//again, importing axios in order to use axios
export default {

  data(){//we will use this to display the user email received from Firebase (we could display all the data, but we use just the email as an example)
    return {
      email: '',//for now, this is an empty string...
    }
  },

  created(){//created() is a lifecycle hook in Vue
    axios.get('https://axios3-24c7b.firebaseio.com/users.json')//here we are creating a get request with axios, we need the user data... This get request here will be activated every time when we load the dashboard page.

      .then( res => {//.then is chained to the previous line, it continous it. This get request is an   async task, so we can..., we will react to the result of this request in some point in the future. This result will be a response. This is the 'res'.

        console.log(res);//taking 'res' as an argument, and displaying it in the console log. 

        const data = res.data;//Now, since this is async task (.then()), we have acces to the 'res' response from the Firebase only inside the .then(). This is the only place to get info from res. 'res' is a JS object, and it contains our desired email data. So first, we store the res.data in our const data. We want this received js object to convert into an array.

        const users = [];//We have to loop through the const data, to get the email address.   The result of the looping will be stored in const users array

        for(let key in data) {//here we are looping thorugh our const data

          const user = data[key]//every found key should be added to const user, which is just created in this line

          user.id = key//we are creating this id property, this id prop did not exist before
          users.push(user)//finally, every key is pushed to our users array
        }
        console.log(users)
        this.email = users[0].email//There could be more than one users, so give us the email adress of the first user
         
      }) 

    .catch(error => console.log(error))//...still chaining. If there is an error, use the function in the .catch(), use the error as an argument, and display it in the console log.

    
  }
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>