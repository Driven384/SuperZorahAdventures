import Vue from "vue";

import VueRouter from "vue-router";

import routes from "./routes";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";

firebase.initializeApp({
  apiKey: "AIzaSyDQsKp-yHVygrFvMhzt1VSBc_Y1FZPmtPo",
  authDomain: "superzorah.firebaseapp.com",
  projectId: "superzorah",
  storageBucket: 'gs://superzorah.appspot.com'
});



Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  /*el: '#app',
  data: {
    currentRoute: window.location.pathname
  },

  computed: {
    ViewComponent () {
      let matchingView = '';

      routes.forEach((item) => {

        if (item.path == this.currentRoute) matchingView = item.component.name;
      });

      console.log(matchingView)

      return matchingView
        ? require('./components/' + matchingView + '.vue')
        : NotFound
    }
  },*/
  router,

  render (h) {
    return h(App)
  }
});
