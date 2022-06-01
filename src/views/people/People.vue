<template>
	<section>
		<div class="title">
			<h1>Personagens</h1>
			<router-link class="backToHome" tag="div" :to="{name: 'Home'}">
				<p>Voltar para Home</p>
			</router-link>
		</div>
		<div class="flex paginationGroup">
			<div class="flex paginationGroup__morePeople" @click="getAllPerson()">
				<p>Carregar mais</p>
			</div>

			<Pagination :allPages="lastPage" @page="searchPage = $event" />
		</div>
		<div class="cards">
			<div v-for="(person, idx) in people" :key="'key_'+idx" class="cards__renderCards">
				<div class="renderCards__card">
					<Card :infos="person" />
				</div>
			</div>
			<span ref="sentinel" id="sentinel"></span>
		</div>

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
	watch: {
		searchPage() {
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

		getAllPerson() {
			this.loading = true

			if (this.page > this.lastPage) {
				this.loading = false
				return
			}
			People.getAllPerson(this.page)
				.then((res) => {
					res.data.results.map(person => {
						this.people.push(person)

						//Adiciona a imagem do personagem 
						person.image = People.getPersonImg(person)

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
.title {
	text-align: center;
	font-size: 1.3em;
	font-family: "Nunito-SemiBold" !important;
}
.cards {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 4px;
}
.cards__renderCards {
	flex: 1;
	transition: all 0.2s;
}
.cards__renderCards:hover {
	box-shadow: 0 0 10px 1px rgb(255, 255, 0);
}
.paginationGroup {
	justify-content: space-between;
	padding: 5px 15px;
}

.paginationGroup__morePeople {
	padding: 10px 15px;
	background: #323232;
	margin: 4px;
	border-radius: 10px;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 600;
	letter-spacing: 1.5px;
	transition: all 0.1s;
	box-shadow: 0 0 5px -2px gold;
}
.paginationGroup__morePeople:hover,
.paginationGroup__morePeople:focus {
	box-shadow: 0 0 10px 0px gold;
}

@media (max-width: 767px) {
	.paginationGroup {
		flex-direction: column;
	}
	.cards__renderCards {
		max-width: 100%;
		transition: all 0.2s;
	}
}
@media (max-width: 479px) {
	.paginationGroup__morePeople {
		font-size: 0.8em;
	}
}
</style>