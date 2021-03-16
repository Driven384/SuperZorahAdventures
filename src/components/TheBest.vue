<template>
  <div id="the-best">
    <div class="card">
      <h3 class="title is-3">The best</h3>
      <b-carousel
            :arrow="arrow"
            :repeat="arrowBoth"
            :arrow-hover="arrowHover"
            :icon-pack="iconPack"
            :icon-prev="iconPrev"
            :icon-next="iconNext"
            :icon-size="iconSize">
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section class="hero">
                    <div class="has-text-centered">
                        <img :src="carousel.image" :alt="carousel.alt">
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheBest",

  data(){
      return {
        arrow: true,
          arrowBoth: false,
          arrowHover: false,
          iconPack: 'mdi',
          iconPrev: 'chevron-left',
          iconNext: 'chevron-right',
          iconSize: '',
          carousels: [
              { image: require('../assets/images/zorah7.jpg'), alt: 'zorah' },
              { image: require('../assets/images/zorah2.jpg'), alt: 'zorah' },
              { image: require('../assets/images/zorah3.jpg'), alt: 'zorah' },
              { image: require('../assets/images/zorah4.jpg'), alt: 'zorah' }
          ]
      }
  }
};
</script>

<style scoped>
  img {
    max-height: 500px;
  }
</style>
