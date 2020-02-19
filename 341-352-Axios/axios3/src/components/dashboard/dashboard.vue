<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
  </div>
</template>

<script>
//we sent with axios user data to Firebase. We now want to get this data from Firebase, to display it here.
import axios from 'axios';//again, importing axios in order to use axios
export default {
  created(){//created() is a lifecycle hook in Vue
    axios.get('https://axios3-24c7b.firebaseio.com/users.json')//here we are creating a get request with axios, we need the user data... 

    .then( res => console.log(res))//.then is chained to the previous line, it continous it. This get request is an async task, so we can..., we will react to the result of this request in some point in the future. This result will be a response. This is the 'res'. The function in .then is taking 'res' as an argument, and displaying it in the console log.

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