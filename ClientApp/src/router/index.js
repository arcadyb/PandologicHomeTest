import { createRouter, createWebHistory } from 'vue-router';
import ChartView  from '../views/ChartView.vue';
import TableView  from '../views/TableView.vue';

const routes = [
    
    { path: '/', name: 'ChartView', component: ChartView },
    { path: '/ChartView', name: 'ChartView', component: ChartView },
    { path: '/TableView', name: 'TableView', component: TableView }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
