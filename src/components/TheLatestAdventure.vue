<template>
  <div id="the-latest-adeventure">
    <div class="card">
      <div class="content">
        <h3 class="title is-3">The latest adventure</h3>
        <p class="title is-5">{{adventureProps.title}}</p>
        <p class="subtitle is-6">{{adventureProps.date}} - By {{adventureProps.author}}</p>
        <p>{{adventureProps.intro}}...</p>

        <b-button
            label="Read more"
            type="is-primary"
            outlined
            @click="isComponentModalActive = true" />

        <b-modal
            v-model="isComponentModalActive"
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
import {db} from "../firebase";
import Adventure from "../modals/Adventure.vue";

export default {
  name: 'TheLatestAdventure',

  components: {
      'adventure': Adventure
  },

  data() {
    return {
      adventureProps: [],
      isComponentModalActive: false,
      id: null,
    };
  },

  methods: {
    getTheLatestAdventure() {
      var adventures = db.collection("adventures");
      var query = adventures.orderBy("date").limit(1);

      query.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            var data = doc.data();

            //from timestamp to readable date
            data.date.toDate();
            data.date = new Date(data.date.seconds*1000).toDateString();

            this.adventureProps = data;

            this.adventureProps.intro = this.adventureProps.text.substring(0,140);
            this.id = doc.id;
          });
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });
    },
  },

  created() {
    this.getTheLatestAdventure();
  }
};
</script>

<style scoped>
  button {
    float: right;
  }
</style>
