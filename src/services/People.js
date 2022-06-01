import axios from 'axios'
import GoogleApi from '../services/GoogleApi'
import globalFn from './GlobalFunctions'
const configs = require('../../apiConfigs.json')
const visualGuideApi = configs.visualGuide
const People = axios.create({
	baseURL: "https://swapi.dev/api/people/",
})


export default {
	// Retorna 10 personagens por página.
	// Numero da página passado como parametro "page"
	async getAllPerson(page) {
		return await People.get(`?page=${ page }`)
	},
	// Retorna um personagem especifico de acordo com o nome passado como parametro "name"
	getPeopleByName(name) {
		return People.get(`?search=${ name }`)
	},
	getPersonImg(person) {
			// Verifica qual api de imagens deve usar
			if (localStorage.getItem('apiSelected') == 'google') {
				GoogleApi.googleSearch(person.name)
					.then((res) => {
						 return res.data.items[0].link
					})
			} else{
				return `${ visualGuideApi.baseUrl + visualGuideApi.search.characters + globalFn.getUrlId(person.url) }.jpg`				
			}

	}

}