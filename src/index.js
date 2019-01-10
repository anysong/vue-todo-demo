import Vue from 'vue/dist/vue';
import App from './app.vue';


var oDiv = document.getElementById('app');

new Vue({
    render: function(create){
        return create(App);
    }
}).$mount(oDiv);

// new Vue({
//     render: (h) => h(App)
// }).$mount(oDiv);

// var app = new Vue({
//     el: '#app',
//     data: {
//       message: 'Hello Vue!'
//     }
//   })