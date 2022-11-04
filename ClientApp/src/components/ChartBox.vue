<template>
<div class="container-fluid chart">
   <GChart
      type="LineChart"
      :data="chartData"
      :options="chartOptions"
      :createChart="(el, google) => new google.visualization.ComboChart(el)"
      
    /> 
    <div style="margin-top:5em">{{result}}</div>   
</div>

</template>
<script setup>
import { GChart } from "vue-google-charts";
import { onMounted, onUnmounted ,ref} from 'vue'
        var chartData = [
          ['Month', 'Bolivia', 'Ecuador', 'Madagascar' ],
          ['2004/05',  165,      200,         522 ],
          ['2005/06',  235,      300,        599 ],
          ['2006/07',  357,      400,        587 ],
          ['2007/08',  439,      500,        615 ],
          ['2008/09',  536,      600,         629 ]
        ];

        var chartOptions = {
          title : 'Cumulative job views vs. prediction',
          vAxis: {title: 'Job views'},
          hAxis: {title: ''},
          width:'100%',
          height:300,
          pointSize: 20,
          seriesType: 'bars',
          color : 'gray',
        legend: { 
                  position: 'bottom', 
                alignment: 'center' ,
                orientation: 'vertical',
            } ,         
          series: {
            1: { pointShape: { type: 'circle', color: 'red', lineWidth: 0 } , type: 'line'},
            2: { pointShape: { type: 'circle', color: 'red', lineWidth: 0 } , type: 'line'}
            
            }
          
        };
      const result = ref(null);
      onMounted(() => {
           fetch('WeatherForecast').then(Response=>Response.json()).then(data=>result.value = data)
      })     
</script>

<style scoped>
  .chart{
    height: 50%;
  } 

</style>