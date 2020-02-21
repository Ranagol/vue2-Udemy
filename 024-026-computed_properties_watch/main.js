new Vue({
  el: '#app',//connects to the DOM
  data: {//data is not reactive, it can only store data, and nothing more
    name: 'Andor',
    counter: 0,
    secondCounter: 0,
  },

  computed:{//has dependent properties, that are computed. A method stored in the computed can be called as a property (without ()). 
    computedWay(){
      console.log('computedWay activated');
      return this.counter > 2 ? 'Greater than 2' : 'Smaller than 2';
    }
  },

  watch: {//the watch object is a similar thing like the computed properties. 

    counter: function(value){//Here we set up a property name that we want to watch. So, this counter is not a new duplicate property! We just watch it here. Then, we specifiy a function that we want to be executed, whenever our counter is changed. the value here is automatically passed by Vue. This value is the value of the change that happened to the counter. However, using computed propeties is a better solution, because it is more optimized.
      
      var vm = this;//we have to store our Vue instance in a separate variable, otherwise it won't be accessible from here (scope issue?)
      
      setTimeout(function(){

        vm.counter = 0;//we are resetting the counter here. vm is our Vue instance. vm.counter is how we can acces the counter property from here, from this callback closure.

      }, 3000);//we want to reset our counter two seconds, after it value changed. So we watch th counter in the watch object, and activate our callback function, when the counter has changed, with a delay of 2 seconds.
      }
  },

  methods:{//contains all the methods
    methodWay(){
      console.log('methodWay activated'); 
      return this.counter > 2 ? 'Greater than 2' : 'Smaller than 2';
    }//this method will be called always, repeatedly, because Vue doesn't know if he needs to update this. Even if we click on the 'Increase second' button (which does not have any role here) Vue will have to check. Which is waste of resources. Vue won't activate computedWay() if we click on the 'Increase second' button, but it will (unneccesarily) activate methodWay(). So, hitting the 'Increase second', and activating the computedWay computed property is the right way.
  },
});