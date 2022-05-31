import axios from 'axios'
import GoogleApi from '../services/GoogleApi'
import globalFn from './GlobalFunctions'
const configs = require('../../apiConfigs.json')
const visualGuideApi = configs.visualGuide

const Films = axios.create({
	baseURL: "https://swapi.dev/api/films/",
  })

export default {
	// Retorna um filme especifica de acordo com o id passado no parametro "id"
	async getFilmById(id){
		let film = await Films.get(id)
		film.data.image = await this.getFilmImg(film.data)
		return film
		
	},
	async getFilmImg(film) {
		let link = ''
			// Verifica qual api de imagens deve usar
			if (localStorage.getItem('apiSelected') == 'google') {
				await GoogleApi.googleSearch(film.name)
					.then((res) => {
						link =res.data.items[0].link
					})
			} else{
				link = `${ visualGuideApi.baseUrl + visualGuideApi.search.films + globalFn.getUrlId(film.url) }.jpg`
			}
			return link
	}
}