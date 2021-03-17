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

      <div class="card" v-for="adventure in adventureProps" :key="adventure.title">
        <p class="title is-5">{{adventure.title}}</p>
        <p class="subtitle is-6">13-3-2020 - By {{adventure.author}}</p>
        <p>{{adventure.intro}}...</p>

        <b-button
            label="Read more"
            type="is-primary"
            @click="isAdventureModalActive = true" />

        <b-modal
            v-model="isAdventureModalActive"
            has-modal-card
            full-screen
            :can-cancel="true">
            <adventure :id="id"></adventure>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from "firebase/app";
import "firebase/firestore";
import AdventureUpload from "./AdventureUpload.vue";
import Adventure from "./Adventure.vue";

export default {
  components: {
    'adventureupload': AdventureUpload,
    'adventure': Adventure
  },

  data() {
    return {
      adventureProps: [],
      isComponentModalActive: false,
      isAdventureModalActive: false,
      id: null,
    };
  },

  methods: {
    getTheLatestAdventure() {
      var db = Firebase.firestore();
      var adventures = db.collection("adventures");
      var query = adventures.orderBy("date").limit(1);

      query.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.id = doc.id;
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
