<template>
    <div>
        <h2>The Home Page(Home.vue)</h2>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores, aut autem, blanditiis consequuntur dolore excepturi laborum maiores minima nihil non nulla obcaecati quas quibusdam quod sed suscipit vero voluptatem.</p>
<!--The home page url is this: http://localhost:8080/#/. What is the #? # is used in Single Page Apps. Without the # each ulr request will be sent to the server. But in case of SPAs, we want to handle the routes within the SPA, we don't want the url request to be sent to the server. However there is a way to do this, even without the #. Now the server always returns the index.html file for every new url request. If we now visit http://localhost:8080/user, we will receive a 404 error, because at this point the user route is not registered. But even for a 404 error, the server must return the index.html.
-->
    </div>
</template>