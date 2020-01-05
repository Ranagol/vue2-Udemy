new Vue({
  el: '#app',

  data:{
    attachRed: false,//when starting, this will be grey first.
  },

  computed:{
    divClasses(){//this will return a JS object that contains CSS code
      return{
        red: this.attachRed,//return red if attachRed is true
        blue: !this.attachRed,//return blue if attachRed is false
      }
    }
  }
});

//if the div is grey, we want it to be red on click. If the div is red, we want it to be grey on click.

//if we want to manipulate CSS with Vue, we must bind to the html tag class, like this: :class. It does not matter, if we repeat the class attribute, when binding, because in the end Vue will merge these two classes into one class.

//{red: attachRed} <----this is an object. Problem: it can grow too big, for more complicated tasks (example> when we want to switch between blue and red color), and it can make our code messy. Solution: move these objects to our computed properties.

//note: now we want to switch between red and blue color