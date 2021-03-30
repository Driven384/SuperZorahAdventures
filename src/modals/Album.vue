<template>
  <div class="modal-card" style="width: auto" id="album">
    <header class="modal-card-head">
      <p class="modal-card-title">{{name}}</p>
      <button
        type="button"
        class="delete"
        @click="$parent.close()" />
    </header>

    <section class="modal-card-body">
      <div class="content">
        <div class="columns is-mobile is-multiline">
          <div class="column is-half-mobile" v-for="image in album" :key="image.fullpath">
              <img :src="image.url" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {store} from "../firebase";

export default {
  name: 'Album',

  props: ['name'],

  data() {
    return {
      album: []
    };
  },

  methods: {
    getAlbumByName() {
      var storageRef = store.ref();

      //set name of album
      var listRef = storageRef.child(this.name);

      //get album results
      listRef.listAll().then((res) =>  {
        res.items.forEach((itemRef) => {
          //get download url
          itemRef.getDownloadURL()
          .then((img) => {
            itemRef.url = img

            //push results
            this.album.push(itemRef)
          });
        });
      }).catch((error) => {
          console.error("Error getting images: ", error);
      });

    },
  },

  created() {
    this.getAlbumByName();
  }
}
</script>
