require('./bootstrap');
//require('./components/Header.vue').default;
//window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';
import MainApp from './components/MainApp.vue';
//import Header from './components/Header.vue';
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(
    {
        routes,
        mode: 'history'
    });
    
const app = new Vue({
    el: '#app',
    router,
    components:{
        MainApp}
});

 
