<template>
    <div class="container-fluid chart" id="chartid">
        <div v-if="loading">Loading...</div>

        <GChart :settings="{ packages: ['corechart', 'table', 'map'] }"
                type="LineChart"
                :data="chartData"
                :options="chartOptions"
                :createChart="(el, google) => new google.visualization.ComboChart(el)"
                @ready="onChartReady" />
    </div>
</template>
<script setup>
    import { GChart } from "vue-google-charts";
    import { onMounted, onUnmounted, ref, computed, reactive } from "vue";
    import { useStore } from 'vuex';

    const store = useStore();

    const currentPage = computed(() => store.state.jobsModule.selectedPage);

    const chartData = computed(() => store.state.jobsModule.chartData);

    const chartOptions = computed(() => store.state.jobsModule.chartOptions);

    const loading = computed(() => store.state.jobsModule.loading);



    let gchart = reactive({});


    async function updateChart() {
        await store.dispatch('jobsModule/getPageJobs', { pageNum: 1 })
    };

    function onChartReady(chart, google) {
        gchart = chart;
        updateChart();
    };
    onMounted(async () => {
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