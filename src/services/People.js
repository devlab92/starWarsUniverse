import axios from 'axios'
const configs = require('../../apiConfigs.json')
const visualGuideApi = configs.visualGuide
const People = axios.create({
	baseURL: "https://swapi.dev/api/people/",
})


export default {
	// Retorna 10 personagens por página.
	// Numero da página passado como parametro "page"
	getAllPerson(page) {
		return People.get(`?page=${ page }`)
	},
	// Retorna um personagem especifico de acordo com o nome passado como parametro "name"
	getPeopleByName(name) {
		return People.get(`?search=${ name }`)
	},
	getPersonImg(id) {
		return `${ visualGuideApi.baseUrl + visualGuideApi.search.characters + id }.jpg`
	}

}