<template><!--As said before, there can be only one root element in the template -->
  <div>
    <app-server-status v-for="server in 5"></app-server-status><!-- v-for="server in 5" will create 5 servers. Simple. We create by default one server. This is a component. We can treat components as html tags. So, we can use v-for to multiply component (here we said we need 5 components). That way here we are creating 5 servers, and every one of them can be switched from Critical to Normal status, INDIVIDUALLY!.-->
  </div>
  
</template>


<script>
//Here, in the Home page we want to loop through all our servers that we have. For this, we will need a for loop and access to our ServerStatus component. So, we need to register our ServerStatus. We will do it locally.
  
  import ServerStatus from './ServerStatus.vue';//if we want to use Serverstatus, then we have to import it here
  
  export default {
    components: {//possibly here we are doint a local registration for the ServerStatus.

      'app-server-status': ServerStatus//we want to referr to the component in the ServerStatus.vue file. For this, we need to import ServerStatus. Here we are assigning the object we are importing (the ServerStatus) to the selector 'app-server-status', therefore we can use the 'app-server-status' in the template on the top. But, we want to loop through 'app-server-status' and have multiple servers. So, we use v-for. 'app-server-status' will be the selector or tag for the ServerStatus.
    }
  }

</script>