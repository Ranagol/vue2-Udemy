<template>
  <div>
   <h3>New quote</h3>
   <button @click="counter++">Increase!</button>
   <p>{{ counter }}</p><!--with this counter we are just checking if the component is destroyed after a component switch. Yes, the component dies after a switch, it can't remember this counter value. The counter is resetted.  -->
  </div>
</template>

<script>
  export default {
    data: function(){
      return{
        counter:0,
      };
    }
  }
</script>


<style scoped>


</style>