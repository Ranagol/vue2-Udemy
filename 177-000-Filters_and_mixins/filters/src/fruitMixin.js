export const fruitMixin = {
 data(){
  return{

   fruits: ['apple', 'banana', 'mango', 'melon'],
   filterText: '',//Vue is mergeing this data with the data in the App.vue.
  }
 },

 computed: {
  filteredFruits(){
    return this.fruits.filter((element) => {//filter() is a built in JS function. ()=> is a callback function.

        return element.match(this.filterText) //in this callback we must return all the elements that we want to be filtered. So what we are saying here: return all elements that match the filterText. match() is a built in JS function.
    });
  }
 }
};