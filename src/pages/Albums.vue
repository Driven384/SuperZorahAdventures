<!--This is the Albums component
  - List Albums
  - view album
  - Browse on date
-->

<template>
  <div id="albums">
    <div class="content">
      <div class="topper">
        <h3 class="title is-3">Albums</h3>

        <b-button
            label="Add new album"
            type="is-light is-outlined"
            @click="isComponentModalActive = true" />
      </div>

      <b-modal
          v-model="isComponentModalActive"
          has-modal-card
          full-screen
          :can-cancel="true">
          <imageupload></imageupload>
      </b-modal>

      <div v-for="album in albums" :key="album.fullpath" class="card">
        <p class="title is-5">{{album.name}}</p>

        <b-button
            label="View album"
            type="is-primary"
            outlined
            @click="openModal(album.name)" />
      </div>
    </div>

    <b-modal
        v-model="isAlbumModalActive"
        has-modal-card
        full-screen
        :can-cancel="true">
        <album :name="albumName"></album>
    </b-modal>
  </div>
</template>

<script>
import {store} from "../firebase";
import ImageUpload from '../modals/ImageUpload.vue';
import Album from '../modals/Album.vue';

export default {
  name: 'Albums',

  components: {
    'imageupload': ImageUpload,
    'album': Album
  },

  data() {
    return {
      isComponentModalActive: false,
      isAlbumModalActive: false,
      albumName: '',
      albums: []
    };
  },

  methods: {
    openModal(name) {
      this.albumName = name;
      this.isAlbumModalActive = true;
    },

    getAlbums() {
      var storageRef = store.ref();

      //get results
      storageRef.listAll().then((res) => {
        res.prefixes.forEach((folderRef) => {

          //push albums
          this.albums.push(folderRef)
        });
      }).catch((error) => {
          console.error("Error downloading albums: ", error);
      });
    }
  },

  created() {
    this.getAlbums();
  }
}
</script>
