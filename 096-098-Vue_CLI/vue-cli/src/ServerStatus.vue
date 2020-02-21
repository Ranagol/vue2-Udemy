<template><!-- template can contain only one root element (which can contain many elements). Therefore, we use a div to wrap all our elements -->
  <div>
    <p>Server status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
//Task: imagine that our app is tracking the state of several servers, and we want to be able to track each server state ( which could be 'Normal' or 'Critical' ) separately for every server. this ServerStatus.vue is simulating one server.

export default {//here we are exporting an object. Which will contain our data. Data has to be stored in a form of a function, in order to work. All this will be the root Vue instance, which will be rendered by the render: h => h(App).  is used to create local registration for Vue component.

  data: function(){// be sure to declare your data properties as functions, otherwise they are not going to be reactive.
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
</script>