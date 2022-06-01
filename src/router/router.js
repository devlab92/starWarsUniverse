import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/Home.vue')
		},
		{
			path: '/people',
			name: 'People',
			components: {
				default: () => import('../views/people/People.vue')
			},
			props: true,
		},
		{
			path: '/planets',
			name: 'Planets',
			redirect: 'PageInConstruction',
			// components: {
			// 	default: () => import('../views/planets/Planets.vue')
			// },
		},
		{
			path: '/species',
			name: 'Species',
			redirect: 'PageInConstruction',
			// components: {
			// 	default: () => import('../views/species/Species.vue')
			// },
		},
		{
			path: '/films',
			name: 'Films',
			redirect: 'PageInConstruction'
			// components: {
			// 	default: () => import('../views/films/Films.vue')
			// },
		},
		{
			path: '/vehicles',
			name: 'Vehicles',
			redirect: 'PageInConstruction'
			// components: {
			// 	default: () => import('../views/vehicles/Vehicles.vue')
			// },
		},
		{
			path: '/favorits',
			name: 'Favorits',
			redirect: 'PageInConstruction',
			// components: {
			// 	default: () => import('../views/favorits/Favorits.vue')
			// }

		},
		{
			path: '/pageInConstruction',
			name: 'PageInConstruction',
			components: {
				default: () => import('../views/PageInConstruction.vue')
			},
			props: true,
		},
		{
			path: '/page404',
			name: 'Page404',
			components: {
				default: () => import('../views/Page404.vue')
			},
			props: true,
		},
		{
			path: '/films',
			redirect: 'PageInConstruction'
		},
		// Quando qualquer URL que nao existir for chamada, ela e redirecionada
		{
			path: '*',
			redirect: 'Page404'
		}


	]
})

