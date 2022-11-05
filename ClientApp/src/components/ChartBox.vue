<template>
    <div class="container-fluid chart" id="chartid">
        <GChart type="LineChart"
                :data="chartData"
                :options="chartOptions"
                :createChart="(el, google) => new google.visualization.ComboChart(el)" />
        <div style="margin-top: 5em">{{ result }}</div>
    </div>
</template>
<script setup>
    import { GChart } from "vue-google-charts";
    import { onMounted, onUnmounted, ref } from "vue";
    const chartData = [
        ["", "Cumulative job views", "Cumulative predicted job views", "Active jobs"],
        ["2004/05", 165, 200, 522],
        ["2005/06", 235, 300, 599],
        ["2006/07", 357, 400, 587],
        ["2007/08", 439, 500, 615],
        ["2008/09", 536, 600, 629],
        ["2005/05", 765, 700, 522],
        ["2006/06", 835, 800, 599],
        ["2007/07", 957, 900, 587],
        ["2008/08", 439, 500, 615],
        ["2009/09", 536, 600, 629],
        ["2010/07", '_', 957, '_'],
        ["2011/07", '_', 957, '_'],
        ["2012/07", '_', 957, '_'],
    ];

    const chartOptions = {
        title: "Cumulative job views vs. prediction",
        vAxis: { title: "Job views" },
        hAxis: { title: "" },
        width: "100%",
        height: 300,
        pointSize: 20,
        seriesType: "bars",
        colors: ['YellowGreen', 'DarkTurquoise', 'LightGray'],
        legend: {
            position: "bottom",
            alignment: "center",
            orientation: "vertical",
        },


        series: {
            2: {
                type: "bars"
            },
            1: {
                pointShape: { type: "circle" },
                type: "line",
                lineDashStyle: [2, 2],
            },
            0: {
                pointShape: { type: "circle" },
                type: "line",

            },
        },
    };
    const result = ref(null);
    const selectedPage = ref(1);
    onMounted(() => {
        const furl = 'WeatherForecast/?pageId='+ selectedPage.value;
        fetch(furl)
            .then((Response) => Response.json())
            .then((data) => (result.value = data));
    });
</script>

<style scoped>
    .chart {
        height: 50%;
        border: 1px solid;
        padding: 0px;
        margin-top: 5em;
        box-shadow: 5px 5px 5px 5px #888888;
    }

    #chartid circle {
        stroke-width: 4px !important;
        fill: #ffffff !important;
        stroke: #0000ff !important;
    }
</style>