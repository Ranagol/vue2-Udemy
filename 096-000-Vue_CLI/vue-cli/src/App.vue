<template>
  <p>Server status: {{ status }}</p>
</template>

<script>
export default {//here we are exporting an object. Which will contain our data. Data has to be stored in a form of a function, in order to work. All this will be the root Vue instance, which will be rendered by the render: h => h(App).
  data: function(){
    return {
      status: 'Critical'
    }
    
  }
}
</script>

<style lang="scss">

</style>
