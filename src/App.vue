<template>
  <div id="app">
    <login />

    <navbar v-if="isSignedIn" />

    <router-view v-if="isSignedIn"></router-view>
  </div>
</template>

<script>
import Vue from "vue";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

//import firebase from "firebase";

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
      isSignedIn: false
    }
  },

  methods: {
    checkSignedIn() {
      /*firebase.auth().onAuthStateChanged(function() {
        if (user) {
          // User is signed in.
          console.log(user)
          this.isSignedIn = true;
        } else {
          // No user is signed in.
          this.isSignedIn = true;
          console.log('no')
        }

      });*/
      this.isSignedIn = true;
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
