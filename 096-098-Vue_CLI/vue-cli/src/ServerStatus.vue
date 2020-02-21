<template><!-- template can contain only one root element (which can contain many elements). Therefore, we use a div to wrap all our elements -->

  <div>
    <p>Server status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
//Task: imagine that our app is tracking the state of several servers, and we want to be able to track each server. this ServerStatus.vue is simulating one server.

export default {//here we are exporting an object. Which will contain our data. Data has to be stored in a form of a function, in order to work. All this will be the root Vue instance, which will be rendered by the render: h => h(App).
//possibly here we are using local registration??

  data: function(){
    return {
      status: 'Critical'
    }
  },

  methods: {
    changeStatus(){
      this.status = 'Normal';
    }
  }
}
//once we create our component, we have to register it, in order for the component to work. We can register it globally, or locally. 
</script>