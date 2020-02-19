import axios from 'axios';

//CUSTOM AXIOS INSTANCES
//Right now, we are always using the one global axios, which we import from the global axios package with import axios from 'axios';. But sometimes, we could want to work wiht multiple databases, multiple tables, and all on different Firebase link, and with different setups and addresses. We can do this with custom axios instances. Now, imagine that for authenticating, and for sending requests from the signin.vue and signup.vue files, we actually want to set up a different base url than the one we have on th main.js, in the axios.defaults.baseURL already.

const instance = axios.create({//this will create a new axios instance
  baseURL: 'https://axios3-24c7b.firebaseio.com', //yes, yes this is the same url that we have in the main.js/axios.defaults.baseURL = 'https://axios3-24c7b.firebaseio.com', but this is the way how we could use here a DIFFERENT url
});

instance.defaults.headers.common('SOMETHING') = 'something'; //we just created const instance a few lines above... Here we set up the headers for our custom axios instance, that is stored in the const instance.

export default instance  //here we export out our const instance that stores our custom axios, so we will be able to import it in signup.vue