import { createRouter, createWebHistory } from 'vue-router';
import ChartView  from '../views/ChartView.vue';
import About  from '../views/About.vue';

const routes = [
    
    { path: '/', name: 'Home', component: ChartView },
    { path: '/ChartView', name: 'ChartView', component: ChartView },
    { path: '/About', name: 'About', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
