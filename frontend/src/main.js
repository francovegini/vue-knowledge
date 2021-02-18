import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import App from './App';

import './config/bootstrap';
import store from './config/store';
import router from "./config/router";

Vue.config.productionTip = false

// TEMPORÁRIO - Utilizado para fazer requisição sem estar autenticado
require('axios').defaults.headers.common['Authorization'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkZyYW5jbyBWZWdpbmkiLCJlbWFpbCI6ImZyYW5jb3ZlZ2luaUBob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MTM2MTQ2OTcsImV4cCI6MTYxMzg3Mzg5N30.Pvkn7ezFY2uZ2lpC9A-41nzCN5QKFzlvqXkvRUfEW5g";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
