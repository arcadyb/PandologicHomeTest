<script setup>
import ChartBox  from '../components/ChartBox.vue';
</script>

<template>
<div class="container-fluid" style="background: green;">
  <div class="chart-aria">
    <ChartBox title="PandoLogic"/>
  </div>
</div>
</template>

<style scoped>

.chart-aria {
  position: relative;
  top: 0em;
  left: 25%;
  width: 50%;
  height: 50%;
  background-color: beige;
}
</style>