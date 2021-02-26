import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import App from './App';

import './config/bootstrap';
import './config/msgs'
import store from './config/store';
import router from "./config/router";

Vue.config.productionTip = false

// TEMPORÁRIO - Utilizado para fazer requisição sem estar autenticado
require('axios').defaults.headers.common['Authorization'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkZyYW5jbyBWZWdpbmkiLCJlbWFpbCI6ImZyYW5jb3ZlZ2luaUBob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MTQzMDg0ODEsImV4cCI6MTYxNDU2NzY4MX0.h9Mpkjfrk_uFWaDFDtgNNnUOBunPUZwt5bzsFvwjzbI";

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
