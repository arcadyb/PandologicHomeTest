import { Actions } from './jobsActions';
import { Mutations } from './jobsMutations';
import { Getters } from './jobsGetters';

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
const initState = {
    loading: false,
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