<template>
  <div id="app">
    <home />
    <navbar />
  </div>
</template>

<script>
import Vue from "vue";


import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import NavBar from "./components/NavBar.vue";

import Home from "./components/Home.vue";
import TheWhy from "./components/TheWhy.vue";
import Albums from "./components/Albums.vue";
import Adventures from "./components/Adventures.vue";
import Adventure from "./components/Adventure.vue";

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/thewhy", component: TheWhy },
  { path: "/albums", component: Albums },
  { path: "/adventures", component: Adventures },
  { path: "/adventures/:id", component: Adventure }
];

const NotFound = { template: '<p>Page not found</p>' };

export default {
  name: "App",

  components: {
    "home": Home,
    "navbar": NavBar
  },

  data() {
    return {
      currentRoute: window.location.pathname
    };

  },

  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) },

  methods: {
  },

  created: function() {
    console.log("Init App")
  }
};
</script>

<style>
@import "./index.css";

#app {
  padding-bottom: 60px;
  background-color: aliceblue;
}

.card {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
}

.tabs .icon:first-child {
  margin-right: 0px;
}
</style>
