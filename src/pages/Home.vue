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

  </div>
</template>

<script>
import TheBest from "../components/TheBest.vue";
import TheLatest from "../components/TheLatest.vue";
import TheLatestAdventure from "../components/TheLatestAdventure.vue";

export default {
  name: 'Home',

  components: {
    'the-best': TheBest,
    'the-latest': TheLatest,
    'the-latest-adventure': TheLatestAdventure
  },
};
</script>

<style scoped>
</style>
