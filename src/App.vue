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
import NavBar from "./components/NavBar.vue";

Vue.use(Buefy);

export default {
  name: "App",

  components: {
    "navbar": NavBar
  },

  methods: {
  },

  created: function() {
    console.log("heey")
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
