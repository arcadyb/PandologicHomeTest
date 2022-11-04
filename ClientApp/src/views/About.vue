<script setup>
import ChartBox  from '../components/ChartBox.vue';
</script>

<template>
<div class="container-fluid" id="about-card-wrapper" >
<div class="card" id="about-card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Test project</h5>
    <h6 class="card-subtitle mb-2 text-muted">Components:</h6>
    <p class="card-text">.NET 5.0</p>
    <p class="card-text">Vue 3.2</p>
    <p class="card-text">EF 6.0</p>
    <p class="card-text">SQLite DB</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
</div>
</template>

<style scoped>
#about-card-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0px;
  margin-top: 5em;
 
}
#about-card {
  border: 1px solid;
  box-shadow: 5px 5px 5px 5px #888888;
}
</style>