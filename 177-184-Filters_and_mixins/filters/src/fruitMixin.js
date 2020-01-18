export const fruitMixin = {// 1 step: create a mixin.js file, insert the duplicate data

//Mixins and scope: is this one fruitMixin object is shared between the componentst where it was added(App.vue and List.vue) or a new instance of this fruitMixin is added to each component (so there will be new instances of this fruitMixin object? Answer: there are new, independent fruitMixin instances (fresh copies of fruitMixin) - fruitMixin is not shared. So the changes in the App.vue fruitMixin will not affect the fruitMixin in the List.vue. If we want these changes to be everywhere, we should use the event bus.

  data(){
    return{

    fruits: ['apple', 'banana', 'mango', 'melon'],
    filterText: '',//Vue is mergeing this data from fruitMixin (fruits, filterText) with the data in the App.vue (where fruits, filterText are definetly needed, but they are not there any more ). And everything works. 
    }
  },

  computed: {
    filteredFruits(){
      return this.fruits.filter((element) => {//filter() is a built in JS function. ()=> is a callback function.

        return element.match(this.filterText) //in this callback we must return all the elements that we want to be filtered. So what we are saying here: return all elements that match the filterText. match() is a built in JS function.
      });
    }
  },

  created(){
    console.log('Created logged from mixin.js');//this will be logged two time in the console.log, there will be two 'created' logs. One for App.vue, one for List.vue.
  }
};