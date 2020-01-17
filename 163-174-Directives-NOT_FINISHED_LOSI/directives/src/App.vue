<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built in directives</h1>
                <p v-text="'Some text'"></p><!--""is needed for every directive. '' shows us that this is a string. -->
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom directives</h1>
                <p v-highlight:background.delayed="'red'">Color this with the global v-highlight custom directive</p>
                <p v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 500}">Color this too, with v-local-highlight custom directive</p>
<!-- EXPLANATION FOR THE CUSTOME DIRECTIVE WE MADE
1. We want to add here a custom directive, that will do some background coloring. Obviously this could be done with CSS, but this is just a simple example. 
2. We want the color not to be hardcoded, we want to select the color. This value could be a string 'red', but later it will be a more complex object { mainColor: 'red', secondColor: 'green', delay: 500}.
3. We want to pass argument to the directive. User has to decide if he wants to change the backgroundColor, otherwise the text color will be changed. The :background will be the argument. The :backgorund is also a binding, it is classic v-bind.
4. We want to add a modifier. Example: we want to wait 3 seconds, when the style changes. We use the .delayed modifier(which we will create, this is not a built in modifier).
5. We want to add multiple modifiers. We want the 3 second delaying time, but we also want our div to blink.
6. We want to pass object to the local directive. So far we used a sting "'red'". In this new object we will here we will set up our mainColor and secondColor, we will also set up our delay to 500 ms.-->
            </div>            
        </div>
    </div>
<!--We have two options how to do custom directives. 1-global registering. -->
</template>

<script>
    export default {
        directives: {//this is how we can register locally a directive. It is the same as with the components.

            'local-highlight': {//'local-highlight' is the name of the directive, without the v- part.

                //DELAYING
                bind(el, binding, vnode) {//el, binding, vnode are the mandatory arguments
                    var delay = 0;
                    if (binding.modifiers['delayed']) {//if there is a .delayed modifier...
                        delay = 3000;//then make the delaying time 3000 miliseconds
                    }

                    //BLINKING
                    if (binding.modifiers['blink']) {//if there is a blink modifier, then we want switching between two colors
                        let mainColor = binding.value.mainColor;//we could use here var too. But we used let - without no specific reason. This ( binding.value.mainColor ) is how we can acces the mainColor from the { mainColor: 'red', secondColor: 'green', delay: 500}

                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;//in the beginning, currentColor will be = mainColor
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;//for the blinking we need to switch between two colors. Here we set up the color changing, with a ternary operator.

                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);//we are retrieveing this from { mainColor: 'red', secondColor: 'green', delay: 500}

                        }, delay);
                    } else {//IF NO BLINKING, THEN: BACKGROUNDCOLOR CHANGE
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor;////we are retrieveing this from { mainColor: 'red', secondColor: 'green', delay: 500}
                            } else {
                                el.style.color = binding.value.mainColor;////we are retrieveing this from { mainColor: 'red', secondColor: 'green', delay: 500}
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>
</style>
