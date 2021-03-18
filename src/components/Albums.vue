<!--This is the Albums component
  - List Albums
  - view album
  - Browse on date
-->

<template>
  <div id="albums">
    <div class="content">
      <h3 class="title is-3">Albums</h3>

      <b-button
          label="Add new images"
          type="is-primary"
          @click="isComponentModalActive = true" />

      <b-modal
          v-model="isComponentModalActive"
          has-modal-card
          full-screen
          :can-cancel="true">
          <imageupload></imageupload>
      </b-modal>
    </div>
  </div>
</template>

<script>
import ImageUpload from './ImageUpload.vue';

export default {
  name: 'Albums',

  components: {
    'imageupload': ImageUpload
  },

  data() {
    return {
      isComponentModalActive: false
    };
  }
}
</script>
