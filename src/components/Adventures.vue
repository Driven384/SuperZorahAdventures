<!--This is the Adventures component
  - List adventures
  - Click adventure, to read more
  - Browse adventure on date
-->

<template>
  <div id="adventures">
    <div class="content">
      <h3 class="title is-3">Adventures</h3>
    </div>
    <vue-fab mainBtnColor="#3599DB">
      <fab-item @clickItem="clickItem" :idx="0" title="add" icon="add" />
      <fab-item @clickItem="clickItem" :idx="1" title="https" icon="https" />
      <fab-item @clickItem="clickItem" :idx="2" title="edit" icon="edit" />
    </vue-fab>
  </div>
</template>
