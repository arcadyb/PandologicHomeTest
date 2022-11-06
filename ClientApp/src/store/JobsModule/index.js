import { Actions } from './jobsActions';
import { Mutations } from './jobsMutations';
import { Getters } from './jobsGetters';

const chartData = [
    ["", "Cumulative job views", "Cumulative predicted job views", "Active jobs"],
    ["2004/05", 0, 0, 0]
 
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
const initState = {
    loading: true,
    error: null,
    selectedPage: 1,
    chartData: chartData,
    chartOptions: chartOptions
};
export default {
    namespaced: true,
    state: initState,
    mutations: Mutations,
    actions: Actions,
    getters: Getters
};