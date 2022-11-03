<template>
<div class="container-fluid">
   <GChart
      type="LineChart"
      :data="chartData"
      :options="chartOptions"
      
    />    
</div>

</template>
<script setup>
import { GChart } from "vue-google-charts";
let chartData = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ]
      let chartOptions = {
        chart: {
          title: "Company Performance",
          curveType: 'function',
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      }
</script>

<style scoped>


</style>