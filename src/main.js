import Vue from "vue";
import VueFab from "vue-float-action-button";

import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./routes";

import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDQsKp-yHVygrFvMhzt1VSBc_Y1FZPmtPo",
  authDomain: "superzorah.firebaseapp.com",
  projectId: "superzorah"
});

import "@mdi/font/css/materialdesignicons.css";

Vue.use(VueFab,  {
  // opitons 可选iconfont图标或MaterialIcons
  iconType: 'MaterialDesign',
});

import App from "./App.vue";

Vue.config.productionTip = false;
//const NotFound = { template: '<p>Page not found</p>' };

const router = new VueRouter({
  routes
});

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
