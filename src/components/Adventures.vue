<!--This is the Adventures component
  - List adventures
  - Click adventure, to read more
  - Browse adventure on date
-->

<template>
  <div id="adventures">
    <div class="content">
      <h3 class="title is-3">Adventures</h3>

      <b-button
          label="Add new adventure"
          type="is-primary"
          @click="isComponentModalActive = true" />

      <b-modal
          v-model="isComponentModalActive"
          has-modal-card
          full-screen
          :can-cancel="true">
          <adventureupload></adventureupload>
      </b-modal>

      <div class="card" v-for="adventure in adventureProps" :key="adventure.id">
        <p>{{adventure.title}}</p>
        <h6 class="subtitle is-6">13-3-2020 - By {{adventure.author}}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase/app";
import "firebase/firestore";
import AdventureUpload from "./AdventureUpload.vue";

export default {
  components: {
    'adventureupload': AdventureUpload,
  },

  data() {
    return {
      adventureProps: [],
      isComponentModalActive: false
    };
  },

  methods: {
    getTheLatestAdventure() {
      var db = Firebase.firestore();
      var adventures = db.collection("adventures");
      var query = adventures.orderBy("date").limit(1);

      query.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.adventureProps.push(doc.data());
          });
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });

      console.log(this.adventureProps)
    },
  },

  created() {
    console.log('adventures')
    this.getTheLatestAdventure();
  }
}
</script>
