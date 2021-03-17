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
@import "./index.css";

#app {
  padding-bottom: 60px;
  background-color: aliceblue;
}

.b-tabs .tab-content {
  padding: 0px;
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
