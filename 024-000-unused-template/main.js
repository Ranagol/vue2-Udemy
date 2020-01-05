new Vue({
  el: '#app',//connects to the DOM
  data: {//data is not reactive, it can only store data, and nothing more
    name: 'Andor',
    counter: 0,
    secondCounter: 0,
  },

  computed:{//has dependent properties, that are computed. A method stored in the computed can be called as a property (without ()).
    computedWay(){
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },

  methods:{//contains all the methods
    methodWay(){//this method will be called always, repeatedly, because Vue doesn't know if he needs to update this. Even if we click on the 'Increase second' button (which does not have any role here) Vue will have to check. Which is waste of resources.
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },





});