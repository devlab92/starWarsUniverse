<template>
	<section>
		<h1>Personagens</h1>
			<Pagination :allPages="lastPage" @page="searchPage = $event"/>
		<div class="cards">
			<div v-for="(person, idx) in people" :key="'key_'+idx" class="cards__renderCards">
				<div class="renderCards__card">
					<Card :infos="person" />
				</div>
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
		<Loading :loadingVerify="loading" />
	</section>
</template>

<script>
import People from '../../services/People'
import Card from '../../components/Card.vue'
import Loading from '../../components/Loading.vue'
import Pagination from '../../components/Pagination.vue'
export default {
	name: "People",
	components: {
		Card,
		Loading,
		Pagination
	},
	data() {
		return {
			loading: false,
			people: [],
			selectedPerson: {},
			showingPerson: false,
			page: 1,
			lastPage: 1,
			images: [],
			searchPage: ''
		}
	},
	watch:{
		searchPage(){
			this.page = this.searchPage
			this.people = []
			this.getAllPerson() 
		}
	},
	beforeMount() {
		this.getAllPerson()
		// this.people = globalFn.fillArrayPeople()
	},
	mouted() {
		this.scrollTrigger()
	},
	computed: {

	},
	methods: {
		scrollTrigger() {
			console.log('scrollTrigger')

			const sentinel = new IntersectionObserver((entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					setTimeout(() => {
						this.getAllPerson()
					}, 200)
				}
			})

			sentinel.observe(this.$refs.sentinel)
			return () => IntersectionObserver.disconnect()
		},

		async getAllPerson() {
			this.loading = true

			if(this.page > this.lastPage){
				this.loading = false
				return
			}
			await People.getAllPerson(this.page)
				.then((res) => {
					res.data.results.map(person => {
						this.people.push(person)

						//Adiciona a imagem do personagem 
						People.getPersonImg(person).then((res) => {
							person.image = res
						})

					})
					this.lastPage = res.data.count % 10 == 0 ? res.data.count : Math.trunc(res.data.count / 10 + 1)
					this.page++
					this.loading = false
				})

			// Chama a rota ate que a sentinela suma da tela, ou seja, que tenha persoagens até criar barra de rolagem 
			// Assim escondendo a sentinela e quando a tela é rolada para baixo o Observer começa a funcionar.
				
			// let attScroll = document.getElementById('sentinel')
			// if (this.page <= this.lastPage && attScroll.scrollHeight <= attScroll.clientHeight) {
			// 	this.loading = true
			// 	// this.getAllPerson()
			// }
			this.loading = false
		}
	}
}
</script>

<style scoped>
.cards {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
.cards__renderCards {
	max-width: calc(50% - 4px);
	transition: all 0.2s;
}
.cards__renderCards:hover {
	box-shadow: 0 0 10px 1px rgb(255, 255, 0);
}
.renderCards__card {
	padding: 5px;
}

@media (max-width: 767px) {
	.cards__renderCards {
		max-width: 100%;
		transition: all 0.2s;
	}
}
</style>