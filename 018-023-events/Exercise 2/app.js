new Vue({
    el: '#exercise',
    data: {
        value: '',
    },

    methods:{
        showAlert(){
            alert('Alert');
        },

        storeValue(){
            this.value = event.target.value;
        }
    },
});