<!--This is the Adventures component
  - List adventures
  - Click adventure, to read more
  - Browse adventure on date in the future
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
        <p class="subtitle is-6">{{adventure.date}} - By {{adventure.author}}</p>
        <p>{{adventure.intro}}...</p>

        <b-button
            label="Read more"
            type="is-primary"
            outlined
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
      //init db
      var db = Firebase.firestore();
      var adventures = db.collection("adventures");
      var query = adventures.orderBy("date");

      //start
      query.get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
          this.id = doc.id;
          var data = doc.data();

          //get intro text
          data.intro = data.text.substring(0,140);

          //from timestamp to readable date
          data.date.toDate();
          data.date = new Date(data.date.seconds*1000).toDateString();

          //push items
          this.adventureProps.push(data);
        });

      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });
    },
  },

  created() {
    this.getTheLatestAdventure();
  }
}
</script>

<style scoped>
  .card button {
    float: right;
  }
</style>
