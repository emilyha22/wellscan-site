import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CalculatorView from '../views/CalculatorView.vue';
import SearchView from '../views/SearchView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/calculator',
            name: 'Calculator',
            component: CalculatorView,
        },
        {
            path: '/search',
            name: 'Search',
            component: SearchView
        }
    ]
})
export default router;