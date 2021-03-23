<template>
  <div id="app">
    <navbar />
    <div class="columns is-mobile">
      <div class="column" style="background-color:#77E09E;">
      </div>
      <div class="column" style="background-color:#08b7c4;">
      </div>
      <div class="column" style="background-color:#fbc941;">
      </div>
      <div class="column" style="background-color:#ff73a1;">
      </div>
      <div class="column" style="background-color:#935fc7;">
      </div>
    </div>
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
