<!--This is the Adventure upload component
  - Uploading text
  - Add editor in future
-->
<template>
  <div class="modal-card" style="width: auto" id="adventure-upload">
    <header class="modal-card-head">
      <p class="modal-card-title">Add adventure</p>
      <button
        type="button"
        class="delete"
        @click="$parent.close()" />
    </header>

    <section class="modal-card-body">
      <div class="content">
        <b-field>
            <b-input placeholder="Author" v-model="author" required></b-input>
        </b-field>
        <b-field label="Select a date">
            <b-datepicker
                placeholder="Type or select a date..."
                icon="calendar-today"
                v-model="locale"
                required
                >
            </b-datepicker>
        </b-field>
        <b-field>
            <b-input maxlength="500" type="textarea" placeholder="Text" v-model="text" required></b-input>
        </b-field>

        <b-button
            label="Save"
            type="is-primary"
            @click="saveAdventure()" />
      </div>
    </section>
  </div>
</template>

<script>
import Firebase from "firebase/app";
import "firebase/firestore";

export default {
  name: 'AdventureUpload',

  data() {
    return {
      author: '',
      text: '',
      locale: undefined // Browser locale
    };
  },

  methods: {
    saveAdventure() {
      var db = Firebase.firestore();
      db.collection("adventures").add({
        author: this.author,
        text: this.text,
        date: this.locale
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.$buefy.modal.close()
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
    }
  }
}
</script>
