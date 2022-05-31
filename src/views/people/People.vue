<template>
	<section>
		<Loading :loadingVerify="loading" />
		<h1>Personagens</h1>
		<div>
			<div v-for="(person, idx) in people" :key="'key_'+idx">
				<Card :infos="person" />
			</div>
			<span ref="sentinel" id="sentinel"></span>
		</div>

		<button @click="getAllPerson()">Mais Personagens</button>

		<!-- Nessa router-link esta sendo chamado a tela pelo NAME, passando o ID como PARAMETROS na URL e enviando algumas infos via QUERY -->
		<!-- <router-link tag="button" :to="{
			name: 'EditUser', 
			params: { id }, 
			query: {idade: '25', name: 'Ricardo'}
		}">EDITAR USUARIO </router-link>-->

		<button @click="loading = !loading">Loading</button>
	</section>
</template>

<script>
import People from '../../services/People'
import Starships from '../../services/Starships'
import Card from '../../components/Card.vue'
import globalFn from '../../services/GlobalFunctions'
import Loading from '../../components/Loading.vue'
export default {
	name: "People",
	components: {
		Card,
		Loading
	},
	data() {
		return {
			loading: false,
			people: [],
			selectedPerson: {},
			showingPerson: false,
			page: 1,
			lastPage: 0,
			images: [],
		}
	},
	beforeMount() {
		// this.getAllPerson()
		this.people = globalFn.fillArrayPeople()
	},
	// mouted() {
	// 	this.scrollTrigger()
	// },
	computed: {

	},
	methods: {

		scrollTrigger() {
			const sentinel = new IntersectionObserver((entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					setTimeout(() => {
						this.getAllPerson()
					}, 200)
				}
			})

			sentinel.observe(this.$refs.sentinel)
			this.getAllPerson()
			return () => IntersectionObserver.disconnect()
		},

		async getAllPerson() {
			this.loading = true
			await People.getAllPerson(this.page)
				.then((res) => {
					res.data.results.map(person => {
						this.people.push(person)

						//Adiciona a imagem do personagem 
						People.getPersonImg(person).then((res) => {
							person.image = res
						})

						let starships = []
						// Verifica se o personagem pilota alguma nave e entao adiciona a nave
						if (person.starships) {
							person.starships.map(el => {
								Starships.getStartshipById(globalFn.getUrlId(el))
									.then((res) => {
										starships.push(res.data)
									})
							})
							person.starships = starships
						}
					})
					this.lastPage = res.data.count % 10 == 0 ? res.data.count : Math.trunc(res.data.count / 10 + 1)
					this.page++
					this.loading = false
				})

			// let attScroll = document.getElementById('sentinel')
			// // Chama a rota ate que a sentinela suma da tela, ou seja, que tenha persoagens até criar barra de rolagem 
			// // Assim escondendo a sentinela e quando a tela é rolada para baixo o Observer começa a funcionar.				
			// if (this.page <= this.lastPage && attScroll.scrollHeight <= attScroll.clientHeight) {
			// 		this.getAllPerson()
			// }
		}
	}
}
</script>

<style scoped>
</style>