<template>
  <div id="the-latest-adeventure">
    <div class="card">
      <div class="content">
        <h3 class="title is-3">The latest adventure</h3>
        <h6 class="subtitle is-6">13-3-2020 - By Manon</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean auctor ullamcorper ultrices. Donec sagittis velit id ex vulputate,
          vitae bibendum neque scelerisque. Sed a quam sit amet mi sodales vehicula.
          Vestibulum leo tellus, sodales id blandit quis ...
        </p>
        <b-button type="is-link"><router-link to="/adventure/1"></router-link>Read more</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheLatestAdventure',
  data() {
    return {
      title: '',
      date: '',
      author: '',
      intro: '',
      id: null
    }
  },

  created: function() {
    console.log("heey")
  }
};
</script>
