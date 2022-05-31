import axios from 'axios'
import GoogleApi from '../services/GoogleApi'
import globalFn from './GlobalFunctions'
const configs = require('../../apiConfigs.json')
const visualGuideApi = configs.visualGuide

const Species = axios.create({
	baseURL: "https://swapi.dev/api/species/",
  })

export default {
	// Retorna uma veículo especifica de acordo com o id passado no parametro "id"
	async getSpecieById(id){
		let specie = await Species.get(id)
		specie.data.image = await this.getSpecieImg(specie.data)
		return specie
		
	},
	async getSpecieImg(specie) {
		let link = ''
			// Verifica qual api de imagens deve usar
			if (localStorage.getItem('apiSelected') == 'google') {
				await GoogleApi.googleSearch(specie.name)
					.then((res) => {
						link =res.data.items[0].link
					})
			} else{
				link = `${ visualGuideApi.baseUrl + visualGuideApi.search.vehicles + globalFn.getUrlId(specie.url) }.jpg`
			}
			return link
	}
}