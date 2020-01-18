<template>
 <div>
  <h1>Filters and mixins from List.vue</h1>
  <input v-model="filterText">
  <ul>
   <li v-for="fruit in filteredFruits">{{ fruit }}</li>
  </ul>
 </div>
</template>

<script>
//basically we made an exact copy of the filtering from the App.vue, which was done with computed properties. The filtering is working independetly, as it should: we have two independent filters in the DOM. But, we have code duplication (data and computed are the same in App.vue and List.vue). This is the problem. This could happen often that there is a piece of code that we just want to share between vue instances. For this, we can use mixins. We copied the data and the computed from List to fruitMixin.js, and after that we imported the fruitMixin.js back to List.

import { fruitMixin } from './fruitMixin';//import the fruitMixin constant from the fruitMixin.js file

export default {
  mixins: [fruitMixin], //mixins is a built in array where we place our mixins

  created(){
    console.log('Created logged from List.vue');//this log will be created after the fruitMixing log. Mixin goes first. Than goes the component. The component always has the last word.
  }
}
</script>

<style></style>
