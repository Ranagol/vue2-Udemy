new Vue({
  el: '#app',

  data:{
    color: 'grey',
    width: 100,
  },

  computed:{
    myStyle(){//here we are setting up our style object
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      };
    }
  },

});

