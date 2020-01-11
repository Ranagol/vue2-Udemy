//var data = {status: 'Critical'};

var componentLocal = {//this is how we can do local registering. We use variables, instead of Vue.component
  data: function(){
    return {
      status: 'Critical'
    }
  },

  template: '<p>Server status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',

  methods:{
    changeStatus(){
      this.status = 'Normal'
    }
  }
};

new Vue({
  el: '#app',
  components: {//this is the second step of local registration. We add components property to the Vue instance. THese components will be only usable in this isntance. Locally.
    
    'my-tag': componentLocal //reminder: componentLocal is our variable, where we store our component
  }
  
})

new Vue({
  el: '#app2'
  
})

//so. We did select a div app, but we have overwritten all this with our template.
//we want to put our status to different places in our html. But Vue instance can only work with the first selected element, not more.
//for this, we must use components. The components extends the Vue instance. Component will have 2 arguments
//the first argument in the component is the tag name that we will use
//the second argument is the actual object, that is our component. We can simply copy our data, template, methods... from Vue instance to the component. But data was an object in the Vue instance. It will become a function in the component. This way this won't interfere with our data??
//However, now we can repeat <myTag></myTag> with our template in it. We could not do that with the original Vue instance.
//If we click on the Change button, only the belonging status will change from Critical to normal (not both). Why? Because we have two <my-tag></my-tag> component objects, and they are different objects. We acces the status with this, and this referrs to the current object only.
//we could use the same div selector, but to use different components for it. For this we need to register Vue.component locally.
//Vue.component is globally registering.
//We can store this the former Vue.component as a variable,