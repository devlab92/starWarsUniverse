<template>
	<section>
		<h1>Personagens</h1>

		<ul>
			<li v-for="(person, idx) in people" @click="showPerson(person.name)" :key="'key_'+idx" >{{person.name}}
				
			<div v-if="person.name == selectedPerson.name && showingPerson">
				<Person :person="selectedPerson"/>

			</div>
			</li>
		</ul>

		<button @click="getAllPerson()">Mais personagens</button>
		<h2>Personagem :</h2>
		{{ selectedPerson.name }}
		<!-- Nessa router-link esta sendo chamado a tela pelo NAME, passando o ID como PARAMETROS na URL e enviando algumas infos via QUERY -->
		<!-- <router-link tag="button" :to="{
			name: 'EditUser', 
			params: { id }, 
			query: {idade: '25', name: 'Ricardo'}
		}">EDITAR USUARIO </router-link> -->
	</section>
</template>

<script>
import People from '../../services/People'
import Person from '../../components/people/Person.vue'
export default {
	name: "People",
	components: {
		Person
	},
	data() {
		return {
			people:[],
			selectedPerson: {},
			showingPerson: false,
			page: 1
			
		}
	},
	beforeMount(){
		this.getAllPerson()
	},
	computed: {

	},
	methods: {
		getAllPerson(){
			People.getAllPerson(this.page)
				.then((res) => {
					res.data.results.map(person => this.people.push(person))
					this.page++
				})
		},
		
		showPerson(name){
			// Verifica se o nome do personagem passado é diferente do que está na variavel do personagem selecionado
			// então ele faz uma requisicao.
			// Caso o nome é igual. Ele só mostra as infos e evita uma chamada
			if(this.selectedPerson.name != name){
				People.getPeopleByName(name)
				.then((res) => {
					this.selectedPerson = res.data.results[0]
					this.showingPerson = true
					return
				})
			}
				this.showingPerson = !this.showingPerson 		
		}
	}
}
</script>

<style scoped>

</style>