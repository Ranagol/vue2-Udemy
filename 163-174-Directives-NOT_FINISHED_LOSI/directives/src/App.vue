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
                <p v-highlight:background.delayed="'red'">Color this with the global v-highlight</p>
                <p v-local-highlight:background.delayed="'red'">Color this too, with v-local-highlight</p>
<!--
1. We want to add here a custom directive, that will do some background coloring. Obviously this could be done with CSS, but this is just a simple example. 
2. We want the color not to be harcoded, we want to select the color.
3. We want to pass argument to the directive. User has to decide if he wants to change the backgroundColor, otherwise the text color will be changed. The :background will be the argument. The :backgorund is also a binding, it is classic v-bind.
4. We want to add a modifier. Example: we want to wait 3 seconds, when the style changes. We use the .delayed modifier(which we will create, this is not a built in modifier).-->
            </div>            
        </div>
    </div>
<!--We have two options how to do custom directives. 1-global registering. -->
</template>

<script>
    export default {
        directives: {//this is how we can register locally a directive. It is the same as with the components.

            'local-highlight': {//'local-highlight' is the name of the directive, without the v- part.
                bind(el, binding, vnode) {
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
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
