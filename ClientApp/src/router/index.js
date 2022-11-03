import { createRouter, createWebHistory } from 'vue-router';
import ChartBox  from '../components/ChartBox.vue';

const routes = [
    
    { path: '/', name: 'ChartBox', component: ChartBox }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
