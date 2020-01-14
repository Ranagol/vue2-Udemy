<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }

</script>


<style scoped>
/*scoped means that this div style is applied only here in this component. Basically, all the styling of the child Quote.vue is done in the child Quote.vue, but everything else is done in the parent App.vue*/
div{
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}


</style>