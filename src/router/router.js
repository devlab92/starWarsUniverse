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
			// essa chave PROPS significa que todos os parametros dessa rota serao enviado como PROPS para a tela que chamar
			props: true,
			// children: [
			// 	{path:'', props: true, component: () => import('../views/user/UserList')},
			// 	{path:'/detailedUser/:id', props: true, component: () => import('../views/user/DetailedUser'),
			// 		name: 'DetailedUser'}
			// ]
		},
		{
			path: '/redirect',
			redirect: '/'
		},
		// Quando qualquer URL que nao existir for chamada, ela e redirecionada
		{
			path: '*',
			redirect: '/'
		}


	]
})

