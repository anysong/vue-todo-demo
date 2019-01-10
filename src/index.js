import Vue from 'vue/dist/vue';
import App from './app.vue';
import './assets/images/pic.jpeg';

var oDiv = document.getElementById('app');
console.log(33341)
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