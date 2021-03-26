<template>
  <div id="app">
    <navbar :login="login" />

    <login v-if="isNotSignedIn" />

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import {firebase} from "./firebase";

import NavBar from "./components/NavBar.vue";
import Login from "./components/Login.vue";

export default {
  name: "App",

  components: {
    "navbar": NavBar,
    "login": Login,
  },

  data() {
    return {
      login: false,
      isNotSignedIn: false
    }
  },

  methods: {
    checkSignedIn() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log(user)
        } else {
          // No user is signed in.
          console.log('no')
          this.isNotSignedIn = true;
        }
      });
    },
  },

  created: function() {
    console.log("Init App")
    this.checkSignedIn();
  }
};
</script>

<style>
@import "./css/index.css";
@import "./css/navbar.css";
</style>
