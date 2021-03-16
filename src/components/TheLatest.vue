<template>
  <div id="the-latest">
    <div class="card">
      <h3 class="title is-3">The latest pictures</h3>

      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child is-primary">
                <img src="../assets/images/zorah1.jpg" style="width:100%">
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <img src="../assets/images/zorah4.jpg" style="width:100%">
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <img src="../assets/images/zorah5.jpg" style="width:100%">
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <img src="../assets/images/zorah6.jpg" style="width:100%">
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child">
                <img src="../assets/images/zorah7.jpg" style="width:100%">
              </article>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "TheLatest"
}
</script>

<style scoped>

.tile.is-8 {
  flex: auto;
}

</style>
