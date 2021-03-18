<template>
  <div id="nav-bar">
    <footer class="card-footer">
      <b-tabs expanded>
        <b-tab-item icon="home"><router-link to="/"></router-link></b-tab-item>
        <b-tab-item icon="image-multiple"><router-link to="/albums"></router-link></b-tab-item>
        <b-tab-item icon="bookshelf"><router-link to="/adventures"></router-link></b-tab-item>
        <b-tab-item icon="information"><router-link to="/thewhy"></router-link></b-tab-item>
      </b-tabs>
    </footer>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  props: ['currentRoute'],

  data() {
    return {
      route: ''
    };
  },

  created: function() {
    this.route = this.currentRoute;
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
  }
</style>
