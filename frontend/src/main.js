import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import App from './App';

import './config/bootstrap';
import './config/msgs'
import store from './config/store';
import router from "./config/router";

Vue.config.productionTip = false

// TEMPORÁRIO - Utilizado para fazer requisição sem estar autenticado
require('axios').defaults.headers.common['Authorization'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkZyYW5jbyBWZWdpbmkiLCJlbWFpbCI6ImZyYW5jb3ZlZ2luaUBob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MTQwMTk2MTgsImV4cCI6MTYxNDI3ODgxOH0.J0EMELgQ8fAWvAZvXgH-V439QoFfUf6s6mgshj4Y2eY";

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
