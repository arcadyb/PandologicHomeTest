<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="top-bar">
    <NavBar msg="Jobs data" />
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.top-bar {
  position: absolute;
  top: 0px;
  left: 25%;
  width: 50%;
}
</style>
