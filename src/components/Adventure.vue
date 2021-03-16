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
        <h6 class="subtitle is-6">13-3-2020 - By {{adventureProps.author}}</h6>
        <p>{{adventureProps.text}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import Firebase from "firebase/app";
import "firebase/firestore";

export default {
  props: ['id'],

  data() {
    return {
      adventureProps: {}
    };
  },

  methods: {
    getAdventureByID() {
      var db = Firebase.firestore();
      var adventures = db.collection("adventures");
      var query = adventures.doc(this.id);

      query.get().then((querySnapshot) => {
        this.adventureProps = querySnapshot.data();
      });
    },
  },

  created() {
    this.getAdventureByID();
  }
}
</script>

<style scoped>
.content p:not(:last-child) {
  margin-bottom: 0px;
}
</style>
