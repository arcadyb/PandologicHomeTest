<template>
<div class="container-fluid">
   <GChart
      type="LineChart"
      :data="chartData"
      :options="chartOptions"
      :createChart="(el, google) => new google.visualization.ComboChart(el)"
      
    /> 
    <div>{{result}}</div>   
</div>

</template>
<script setup>
import { GChart } from "vue-google-charts";
import { onMounted, onUnmounted ,ref} from 'vue'
        var chartData = [
          ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
          ['2004/05',  165,      938,         522,             998,           450,      614.6],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ];

        var chartOptions = {
          title : 'Monthly Coffee Production by Country',
          vAxis: {title: 'Cups'},
          hAxis: {title: 'Month'},
          pointSize: 20,
          seriesType: 'bars',
          series: {5: { pointShape: { type: 'star', sides: 5, dent: 0.8} , type: 'line'}}
        };
      const result = ref(null);
      onMounted(() => {
           fetch('WeatherForecast').then(Response=>Response.json()).then(data=>result.value = data)
      })
     function drawChart () {
      const dataTable = google.visualization.arrayToDataTable([
        this.headings,
        ...this.chartData
      ], false) // 👈 don't forget "false" here to indicate the first row as labels

      const chart = new google.visualization.LineChart(this.$refs.chart) // 👈 use ref here
      chart.draw(dataTable, lineChartOptions)
    }
  
      
</script>

<style scoped>


</style>