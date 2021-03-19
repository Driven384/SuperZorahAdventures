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

      <div class="card" v-for="adventure in adventureProps" :key="adventure.id">
        <p class="title is-5">{{adventure.title}}</p>
        <p class="subtitle is-6">{{adventure.date}} - By {{adventure.author}}</p>
        <p>{{adventure.intro}}...</p>

        <b-button
            label="Read more"
            type="is-primary"
            outlined
            @click="openModal(adventure.id)" />
      </div>
    </div>
    <b-modal
        v-model="isAdventureModalActive"
        has-modal-card
        full-screen
        :can-cancel="true">
        <adventure :id="adventureID"></adventure>
    </b-modal>
  </div>

</template>

<script>
import Firebase from "firebase/app";
import "firebase/firestore";
import AdventureUpload from "../modals/AdventureUpload.vue";
import Adventure from "../modals/Adventure.vue";

export default {
  components: {
    'adventureupload': AdventureUpload,
    'adventure': Adventure
  },

  data() {
    return {
      adventureProps: [],
      adventureID: null,
      isComponentModalActive: false,
      isAdventureModalActive: false,
    };
  },

  methods: {
    openModal(id) {
      this.adventureID = id;
      this.isAdventureModalActive = true;
    },
    getTheLatestAdventure() {
      //init db
      var db = Firebase.firestore();
      var adventures = db.collection("adventures");
      var query = adventures.orderBy("date");

      //start
      query.get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
          var data = doc.data();

          data.id = doc.id;

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
