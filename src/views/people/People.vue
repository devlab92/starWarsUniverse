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
					<Person :person="selectedPerson" />
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
import GoogleApi from '../../services/GoogleApi'
import People from '../../services/People'
import Starships from '../../services/Starships'
import Person from '../../components/people/Person.vue'
export default {
	name: "People",
	components: {
		Person
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
		getPersonImg(person) {
			if (localStorage.getItem('apiSelected') == 'google') {
				GoogleApi.googleSearch(person.name)
					.then((res) => {
						res.data.items.map(el => this.images.push(el.link))
					})
			} else
				this.images.push(People.getPersonImg(this.getUrlId(person.url)))

		},
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

		getAllPerson() {
			People.getAllPerson(this.page)
				.then((res) => {
					res.data.results.map(person => this.people.push(person))
					this.lastPage = res.data.count % 10 == 0 ? res.data.count : Math.trunc(res.data.count / 10 + 1)
					this.page++
				})

			// let attScroll = document.getElementById('sentinel')
			// // Chama a rota ate que a sentinela suma da tela, ou seja, que tenha persoagens até criar barra de rolagem 
			// // Assim escondendo a sentinela e quando a tela é rolada para baixo o Observer começa a funcionar.				
			// if (this.page <= this.lastPage && attScroll.scrollHeight <= attScroll.clientHeight) {
			// 		this.getAllPerson()
			// }
		},
		async showPerson(name) {
			let starshipRes = []
			// Verifica se o nome do personagem passado é diferente do que está na variavel do personagem selecionado
			// então ele faz uma requisicao.
			// Caso o nome é igual. Ele só mostra as infos e evita uma chamada
			if (this.selectedPerson.name != name) {
				await People.getPeopleByName(name)
					.then((res) => {
						this.selectedPerson = res.data.results[0]

						// Se o personagem selecionado possuir pelo menos uma nave relacionada é percorrido o array de naves 
						// para cada nave é buscado as informacoes da nave passando o id da nave (que é pego depois do 32º caracter do link e remove a '/' do final)
						if (this.selectedPerson.starships) {
							this.selectedPerson.starships.map(starship => {
								Starships.getStartshipById(starship.substring(32).replace('/', ''))
									.then((res) => {
										starshipRes.push(res.data)
									})
							})
						}
						// Os retornos da rota são adicionados em um array que após o final da iteração substituira o array com links pelo array com objetos de nave
						this.selectedPerson.starships = starshipRes
						this.showingPerson = true
						return
					})
			}
			this.showingPerson = !this.showingPerson
		},

	}
}
</script>

<style scoped>
</style>