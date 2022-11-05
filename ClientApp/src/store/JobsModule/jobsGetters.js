export const Getters = {
    getCurrentPage(state) {
        
        return state.selectedPage;
    },
    
    getCurrentChart(state) {

        return state.chartData;
    },
    getChartOptions(state) {

        return state.chartOptions;
    }
};