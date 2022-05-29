import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	// Mode pode ter duas opcoes HASH ou HISTORY. Isso mudara como ficara a URL no navegador
	// HASH = URL: localhost:8080/#/new-user
	// HISTORY = URL: localhost:8080/new-user
	// Caso usar o HISTORY, ha necessidade de configuracao extra no servidor

	mode: 'history',
	//Se na URL for passado uma HASH como ancoragem
	scrollBehavior(from, to, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else if (to.hash) {
			return {selector: to.hash, behavior: 'smooth'}
		} else {
			return {x: 0, y: 0, behavior: 'smooth'}
		}

	},
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/Home.vue')
		},
		{
			path: '/people',
			name: 'People',
			// component: () => import('../views/user/Users'),
			// Renderizacao de varios ROUTER-VIEWS que sao nomeados
			// o router-viewr MENU esta declarado na tela APP
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

