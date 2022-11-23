import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/wallet',
		name: 'wallet',
		component: () => import('@/views/WalletView.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

export default router
