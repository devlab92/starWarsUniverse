<template>
	<section>
		<h1>Personagens</h1>
		<ul>
			<li v-for="(person, idx) in people" @click="showPerson(person.name)" :key="'key_'+idx">
				<!-- <div> <button @click="getPersonImg(person)">IMG</button> {{person.name}}</div> -->
				<div>
					<button @click="getPersonImg(person)">IMG</button>
					{{person.name}}
				</div>
				<div v-if="person.name == selectedPerson.name && showingPerson">
					<!-- <Person :person="selectedPerson" /> -->
					<Card :infos="person" />
				</div>
			</li>
			<li ref="sentinel" id="sentinel"></li>
		</ul>

		<button @click="getAllPerson()">Mais personagens</button>
		<h2>Personagem :</h2>
		{{ selectedPerson.name }}
		<!-- Nessa router-link esta sendo chamado a tela pelo NAME, passando o ID como PARAMETROS na URL e enviando algumas infos via QUERY -->
		<!-- <router-link tag="button" :to="{
			name: 'EditUser', 
			params: { id }, 
			query: {idade: '25', name: 'Ricardo'}
		}">EDITAR USUARIO </router-link>-->

		<div v-for="img in images" style>
			<br />
			<img :src="img" width="200px" height="auto" />
			<br />
		</div>
	</section>
</template>

<script>
import People from '../../services/People'
import Starships from '../../services/Starships'
import Person from '../../components/people/Person.vue'
import Card from '../../components/Card.vue'
import globalFn from '../../services/GlobalFunctions'
export default {
	name: "People",
	components: {
		Person,
		Card
	},
	data() {
		return {
			people: [],
			selectedPerson: {},
			showingPerson: false,
			page: 1,
			lastPage: 0,
			images: []
		}
	},
	beforeMount() {
		this.getAllPerson()
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