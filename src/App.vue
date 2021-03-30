<template>
  <div id="app">
    <login />

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

    <navbar v-if="isSignedIn" class="onTopOfColumns" />

    <router-view v-if="isSignedIn" class="onTopOfColumns"></router-view>
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
