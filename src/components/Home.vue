<!-- This is the Home component
  - Add featured image
  - Add latest upload in fun gallery
  - add latest adventure, read more button
  - add Navigation component
-->
<template>
  <div id="home">
    <the-best />
    <the-latest-adventure />
    <the-latest />
    
    <navbar />
  </div>
</template>

<script>
import TheBest from "./TheBest.vue";
import TheLatest from "./TheLatest.vue";
import TheLatestAdventure from "./TheLatestAdventure.vue";
import NavBar from "./NavBar.vue";

export default {
  name: 'Home',

  components: {
    'navbar': NavBar,
    'the-best': TheBest,
    'the-latest': TheLatest,
    'the-latest-adventure': TheLatestAdventure
  },
};
</script>

<style scoped>
</style>
