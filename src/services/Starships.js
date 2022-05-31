import axios from 'axios'
import GoogleApi from '../services/GoogleApi'
import globalFn from './GlobalFunctions'
const configs = require('../../apiConfigs.json')
const visualGuideApi = configs.visualGuide

const Starships = axios.create({
	baseURL: "https://swapi.dev/api/starships/",
  })

export default {
	// Retorna uma nave especifica de acordo com o id passado no parametro "id"
	async getStartshipById(id){
		let starship = await Starships.get(id)
		starship.data.image = await this.getStarshipImg(starship.data)
		return starship
		
	},
	async getStarshipImg(starship) {
		let link = ''
			// Verifica qual api de imagens deve usar
			if (localStorage.getItem('apiSelected') == 'google') {
				await GoogleApi.googleSearch(starship.name)
					.then((res) => {
						link =res.data.items[0].link
					})
			} else{
				link = `${ visualGuideApi.baseUrl + visualGuideApi.search.starships + globalFn.getUrlId(starship.url) }.jpg`
			}
			return link
	}
}