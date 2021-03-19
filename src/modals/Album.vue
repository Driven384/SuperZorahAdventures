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
        <img id="myimage" />
        <div v-for="image in album" :key="image.fullpath" class="tile">
          <img :src="image.url" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Firebase from "firebase/app";

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
      //init storage
      var storage = Firebase.storage();
      var storageRef = storage.ref();

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
