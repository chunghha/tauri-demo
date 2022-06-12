import { createRouter, createWebHistory } from 'vue-router';
import AboutVue from '../pages/About.vue';
import HomeVue from '../pages/Home.vue';

const history = createWebHistory();
export const router = createRouter({
	history,
	routes: [
		{
			path: '/',
			component: HomeVue
		},
		{
			path: '/about',
			component: AboutVue
		}
	]
});
