new Vue({
  el: '#app',

  data:{
    attachRed: false,
    color: 'green',
  },

  computed:{
    divClasses(){//with this we can switch color between red and blue. This divClasses() is binded to #2 div class.

      return{//this will return a JS object that contains CSS code

        red: this.attachRed,//activate .red in CSS if attachRed is true. Note how we had to use this. in order to acces the attachRed

        blue: !this.attachRed,//activate .blue in CSS if attachRed is false
      }
    }
  }
});

//if we want to manipulate CSS with Vue, we must bind to the html tag class, like this: :class. It does not matter, if we repeat the class attribute, when binding, because in the end Vue will merge these two classes into one class.

//{red: attachRed} <----this is an object. We used this with #1 div. Problem: it can grow too big, for more complicated tasks (example> when we want to switch between blue and red color), and it can make our code messy. Solution: move these objects to our computed properties.

