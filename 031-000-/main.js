new Vue({
  el: '#app',

  data:{
    color: 'grey',
    width: 100,
  },

  computed:{
    myStyle(){
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      };
    }
  },

});

