new Vue({
  el: '#exercise',
  data: {
    name: 'Andor',
    age: 38,
    imageLink: 'https://cdn.cnn.com/cnnnext/dam/assets/191024091949-02-foster-cat-large-169.jpg',

  },

  methods:{
    randomFloat(){
      return Math.random();
    }
  }
});