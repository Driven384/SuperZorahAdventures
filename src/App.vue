<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import NavBar from "./components/NavBar.vue";

export default {
  name: "App",

  components: {
    "navbar": NavBar
  },

  created: function() {
    console.log("Init App")
  }
};
</script>

<style>
@import "./css/index.css";
@import "./css/navbar.css";
</style>
