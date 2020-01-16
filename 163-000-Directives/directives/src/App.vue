<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built in directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom directives</h1>
                <p>Color this</p><!--We want to add here a custom directive, that will do some background coloring. Obviously this could be done with CSS, but this is just a simple example.-->
            </div>            
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
