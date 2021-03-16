import Vue from "vue";
import VueRouter from "vue-router";

import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";

import Home from "./components/Home.vue";
import TheWhy from "./components/TheWhy.vue";
import Albums from "./components/Albums.vue";
import Adventures from "./components/Adventures.vue";
import Adventure from "./components/Adventure.vue";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/thewhy", component: TheWhy },
  { path: "/albums", component: Albums },
  { path: "/adventures", component: Adventures },
  { path: "/adventures/:id", component: Adventure }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
