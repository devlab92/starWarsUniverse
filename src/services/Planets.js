import axios from 'axios'
import GoogleApi from '../services/GoogleApi'
import globalFn from './GlobalFunctions'
const configs = require('../../apiConfigs.json')
const visualGuideApi = configs.visualGuide

const Planets = axios.create({
	baseURL: "https://swapi.dev/api/planets/",
  })

export default {
	// Retorna uma veículo especifica de acordo com o id passado no parametro "id"
	async getPlanetById(id){
		let planet = await Planets.get(id)
		planet.data.image = await this.getPlanetImg(planet.data)
		return planet
		
	},
	async getPlanetImg(planet) {
		let link = ''
			// Verifica qual api de imagens deve usar
			if (localStorage.getItem('apiSelected') == 'google') {
				await GoogleApi.googleSearch(planet.name)
					.then((res) => {
						link =res.data.items[0].link
					})
			} else{
				link = `${ visualGuideApi.baseUrl + visualGuideApi.search.vehicles + globalFn.getUrlId(planet.url) }.jpg`
			}
			return link
	}
}