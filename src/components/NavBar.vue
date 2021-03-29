<template>
    <b-navbar id="navbar">
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

    </b-navbar>

</template>

<script>
export default {
  name: "NavBar",

  created: function() {
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
