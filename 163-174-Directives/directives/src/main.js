import Vue from 'vue'
import App from './App.vue'

//We are globally registering our customer directive here, below (the other way is local registration):

Vue.directive('highlight',{//first argument is the name of the directive (without the v- part). binding is our v-highlight. .value is whatever we put into the v-highlight=" ".

  bind(el, binding, vnode){
    var delay = 0;//delay time by default is 0

    if(binding.modifiers['delayed']){//we want to check if our binding has modifiers array (this is always an array, because there could be more than one modifier, so we store them in array), and we want to see if this modifiers array contains 'delayed'. If so, then...

      delay = 3000;//...set the delay time to 3 seconds. This allows us to set a timer...
    }

    setTimeout(() => {// this is the callback function:() =>...
      if(binding.arg == 'background'){//if the binding argument is background...
      
        el.style.backgroundColor = binding.value;//...the elements CSS style backgroundColor should be = with the binded value. .value is whatever we put into the v-highlight=" "
  
      } else {
        el.style.color = binding.value;//...otherwise, set the text color (not the backgorund color!) = binded value. So, if there is no :background, make the text colored, according to the binded value. .value is whatever we put into the v-highlight=" "
      }
    }, delay);
  }
});
/*
for a directive configuring we have 5 hooks, similar like the lifecycle hooks
1-bind() when the directive is attached, applied
2-inserted() when it is inserted into the DOM
3-update() when the component is updated, without children
4-componentUpdated() when the component is updated, with children
5-unbind() when the directive is removed
*/
new Vue({
  el: '#app',
  render: h => h(App)
})
