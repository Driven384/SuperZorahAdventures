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
        <b-field>
          <b-input placeholder="Name album" v-model="name" required></b-input>
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

      <b-progress :value="progression" show-value format="percent"></b-progress>
    </section>
  </div>
</template>

<script>
import Firebase from "firebase/app";
import moment from 'moment';

export default {
  name: 'ImageUpload',

  data() {
    return {
      dropFiles: [],
      name: '',
      progression: 0
    };
  },

  methods: {
    deleteDropFile(index) {
     this.dropFiles.splice(index, 1);
   },

    saveImages() {
      console.log(this.dropFiles)
      // Get a reference to the storage service, which is used to create references in your storage bucket
      var storage = Firebase.storage();

      // Create a storage reference from our storage service
      var storageRef = storage.ref();

      var date = moment().format('DD-MM-YYYY');

      console.log(this.name)
      if(!this.name) this.name = date;

      Object.keys(this.dropFiles).forEach(key => {
        var uploadTask = storageRef.child(this.name +'/' + this.dropFiles[key].name)

        uploadTask.put(this.dropFiles[key]).then((snapshot) => {
          var progression = 0,
           progress = setInterval(function()
           {
             this.progression = progression;
               if(snapshot.state == 'success') {
                   clearInterval(progress);
                   alert('done');
                 }

           }, 1000);

          //if(snapshot.state == 'success') {
            //close modal
            //this.$parent.close();
        //  }
        }).catch((error) => {
            console.error("Error adding image: ", error);
        });
      });
    }
  }
}
</script>

<style scoped>
  button {
    float: right;
  }
</style>
