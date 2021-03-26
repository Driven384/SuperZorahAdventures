<template>
  <div class="modal-card" style="width: auto" id="adventure">
    <header class="modal-card-head">
      <p class="modal-card-title">{{adventureProps.title}}</p>
      <button
        type="button"
        class="delete"
        @click="$parent.close()" />
    </header>

    <section class="modal-card-body">
      <div class="content">
        <h6 class="subtitle is-6">{{adventureProps.date}} - By {{adventureProps.author}}</h6>
        <p>{{adventureProps.text}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import {db} from "../firebase";

export default {
  props: ['id'],

  data() {
    return {
      adventureProps: []
    };
  },

  methods: {
    getAdventureByID() {
      var adventures = db.collection("adventures");
      var query = adventures.doc(this.id);

      query.get().then((querySnapshot) => {
        var data = querySnapshot.data();

        //from timestamp to readable date
        data.date.toDate();
        data.date = new Date(data.date.seconds*1000).toDateString();

        this.adventureProps = data;

      }).catch((error) => {
        console.log("Error getting document: ", error);
      });
    },
  },

  created() {
    this.getAdventureByID();
  }
}
</script>
