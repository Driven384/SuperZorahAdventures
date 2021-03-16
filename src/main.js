import Vue from "vue";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDQsKp-yHVygrFvMhzt1VSBc_Y1FZPmtPo",
  authDomain: "superzorah.firebaseapp.com",
  projectId: "superzorah"
});

import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";

/*const router = new VueRouter({
  routes // short for `routes: routes`
});*/

new Vue({
  render: h => h(App)
}).$mount("#app");
