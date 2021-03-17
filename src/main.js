import Vue from "vue";
import routes from "./routes";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDQsKp-yHVygrFvMhzt1VSBc_Y1FZPmtPo",
  authDomain: "superzorah.firebaseapp.com",
  projectId: "superzorah"
});

import "@mdi/font/css/materialdesignicons.css";

//import App from "./App.vue";

/*const router = new VueRouter({
  routes // short for `routes: routes`
});*/

const NotFound = { template: `<p>Page not found</p>` };

const app = new Vue({
  el: '#app',
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
  },

  render (h) {
    return h(this.ViewComponent)
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
