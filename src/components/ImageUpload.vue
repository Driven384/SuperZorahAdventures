<!--This is the Image upload component
  - Uploading images
-->
<template>
  <div class="modal-card" style="width: auto" id="image-upload">
    <header class="modal-card-head">
      <p class="modal-card-title">Add images</p>
      <button
        type="button"
        class="delete"
        @click="$parent.close()" />
    </header>

    <section class="modal-card-body">
      <div class="content">

        <b-field class="file">
          <b-upload v-model="file" multiple expanded>
            <a class="button is-primary is-fullwidth">
              <b-icon icon="upload"></b-icon>
              <span>{{ file.name || "Click to upload"}}</span>
            </a>
          </b-upload>
        </b-field>
        <b-field>
          <b-upload v-model="dropFiles" multiple drag-drop expanded>
            <section class="section">
              <div class="content has-text-centered">
                <p>
                  <b-icon icon="upload" size="is-large"></b-icon>
                </p>
                <p>Drop your files here or click to upload</p>
              </div>
            </section>
          </b-upload>
        </b-field>

        <div class="tags">
          <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
            {{file.name}}
            <button class="delete is-small" type="button" @click="deleteDropFile(index)"></button>
          </span>
        </div>
      </div>

      <b-button
          label="Save"
          type="is-primary"
          @click="saveImages()" />
    </section>
  </div>
</template>

<script>
//import Firebase from "firebase/app";

export default {
  name: 'ImageUpload',

  data() {
    return {
      file: {},
      dropFiles: []
    };
  },

  methods: {
    deleteDropFile(index) {
     this.dropFiles.splice(index, 1);
   },

    saveImages() {
      console.log(this.files)
      console.log(this.dropfiles)
      // Get a reference to the storage service, which is used to create references in your storage bucket
      //var storage = Firebase.storage();

      // Create a storage reference from our storage service
      //var storageRef = storage.ref();

      //console.log(storageRef)
    }
  }
}
</script>

<style scoped>
  button {
    float: right;
  }
</style>
