import Vue from "vue";

import VueRouter from "vue-router";

import routes from "./routes";

import "./firebase";

import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },

  router,

  render (h) {
    return h(App)
  }
});
