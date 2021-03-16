<!--This is the Navigation component
  - Read adventures
  - The Why
  - Albums
-->

<template>
  <div id="nav-bar">

    <footer class="card-footer">
      <b-tabs expanded>
        <b-tab-item icon="home"><router-link to="/"></router-link></b-tab-item>
        <b-tab-item icon="image-multiple"><router-link to="albums"></router-link></b-tab-item>
        <b-tab-item icon="bookshelf"><router-link to="adventures"></router-link></b-tab-item>
        <b-tab-item icon="information"><router-link to="thewhy"></router-link></b-tab-item>
    </b-tabs>

    </footer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #ffffff;
  }

  .b-tabs .tab-content {
    padding: 0px;
  }
</style>

<style>
  .b-tabs .tab-content {
    padding: 0px;
  }
</style>
