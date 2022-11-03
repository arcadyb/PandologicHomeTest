<script setup>
import { ref } from 'vue'

defineProps({
  title: String
})

const count = ref(0)
</script>

<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{title}}</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <router-link :to="'/ChartView'" custom v-slot="{ navigate, href }">
          <a :href="href" @click.stop="navigate">Charts</a>
        </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/TableView'" custom v-slot="{ navigate, href }">
            <a :href="href" @click.stop="navigate">Data</a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
