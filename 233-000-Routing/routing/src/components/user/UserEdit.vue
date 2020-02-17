<template>
    <div>
        <h3>Edit the User</h3>
        <p>Below we will output dynamically data from the url query parameters:</p>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
    </div>
    
</template>