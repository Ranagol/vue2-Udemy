<template>
  <div>
    
    <div class="title">
      <slot name="title"></slot><!-- example for named slot: title goes here -->
      <span style=" color: #ccc"><slot name="subtitle">The subtitle</slot></span>
    </div><!--'The subtitle is the default content for this slot. -->
    <hr>
    
    <div>
      <slot></slot><!--This is an unnamed slot, which is a default slot for Vue. Title will got to the title slot, and the unnamed content will go automatically to this unnamed slot. -->
    </div>
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

.title{
  font-style: italic;
}


</style>