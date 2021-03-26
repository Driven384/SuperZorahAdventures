<template>
    <b-navbar id="navbar" v-if="isLogin">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <h2 class="title is-2">SuperZorah</h2>
            </b-navbar-item>
        </template>

        <template #start>
          <b-navbar-item tag="router-link" :to="{ path: '/albums' }">
              Albums
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/adventures' }">
              Adventures
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/thewhy' }">
              The why
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/thewhy' }">
              The why
          </b-navbar-item>
        </template>

        <template #end>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-light">
                  Log out
              </a>
            </div>
          </b-navbar-item>
        </template>

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
    </b-navbar>

</template>

<script>
export default {
  name: "NavBar",

  props: ['login'],

  computed: {
    isLogin: function() {
      console.log(this.login)
      return this.login;
      //return this.item.children && this.item.children.length;
    },
  },

  created: function() {
    console.log(this.login)
  }
};
</script>

<style scoped>
  #nav-bar {
    margin-left: -10px;
  }

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #ffffff;
    z-index: 1;
  }
</style>
