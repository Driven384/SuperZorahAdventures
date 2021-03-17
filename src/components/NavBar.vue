<template>
  <div id="nav-bar">
    <footer class="card-footer">
      <b-tabs expanded>
        <b-tab-item icon="home" tag="router-link" :to="route" ></b-tab-item>
        <b-tab-item icon="image-multiple" tag="router-link" :to="`${route}albums`"></b-tab-item>
        <b-tab-item icon="bookshelf" type="router-link" :to="`${route}albums`"></b-tab-item>
        <b-tab-item icon="information" type="router-link" :to="`${route}albums`"></b-tab-item>
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
