import { Actions } from './symbols-data-actions';
import { Mutations } from './symbols-data-mutations';
import { Getters } from './symbols-data-getters';
import ObjChart from '../../classes/chartObject.js';
import FinChart from '../../classes/finChartObject.js';

const initState = {
    selectedSymb: '',
    charts: new Map(),
    doughnutChart: new ObjChart(),
    finChart: new FinChart()
};
export default {
    namespaced: true,
    state: initState,
    mutations: Mutations,
    actions: Actions,
    getters: Getters
};