<template>
    <div>
        <h3>Some User Details</h3>
        <p>User id:{{ $route.params.id }}</p><!--We don't store this id as a property. We could, and it would be OK, but we did not. $route.params.id can retrieve the id number from the url.-->
        
        <router-link 
            tag="button" 
            :to="link"
            class="btn btn-primary">Edit user
        </router-link><!-- :to="link" is binded to link in data()-->
    </div>
    
</template>

<script>
//we want to go to UserEdit.vue with this. We can see in routes.js that the url for the UserEdit.vue is /user/:id/edit. The :id in this url needs to be dynamic. We are creating our wished user/:id/edit url from three parts: "'/user/' +  $route.params.id + '/edit'". Now, instead of manually creating this url, there is a better way with route naming. We can do the route naming in routes.js. As a result, now we have { name: 'userEdit } in :to=... But this solution yet doesn't have an id. That is why we pass another argument: params: { id: $route.params.id}.

//We can also additionally pass query parameters (example for this: http://example.com/path/to/page?name=ferret&color=purple). This is happening in this part: query: { locale: 'en', q: 100}. With this, if we click on Edit user 1 (or 2 or 3), we will get this url: /user/1/edit?locale=en&q=100. We can also extract this data from this url. This will happen in UserEdit.vue.

    export default {
        data() {
            return {
                link: { name: 'userEdit', 
                    params: { 
                        id: this.$route.params.id
                    }, 

                    query: { 
                        locale: 'en', 
                        q: 100
                    },

                    hash: '#data'

                }
            }
        },

        beforeRouteEnter(to, from, next) {//3 option where to put the 'beforeEnter' route guard.
            if(true){//if(true) here is symbolizing authentication check, that returned all ok, continue.
                
                next();//until this next() is called, all this beforeRouteEnter will not be loaded
            }
            next(false);//if the authentication process is false, the do next(false), that won't allow to the user to go to the desired url
        }
    }
</script>