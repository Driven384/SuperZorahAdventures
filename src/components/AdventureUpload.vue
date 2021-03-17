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

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AdventureUpload',

  created() {
    console.log('add adventure')
  }
}
</script>
