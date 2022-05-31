import axios from 'axios'
const configs = require('../../apiConfigs.json')
// no objeto url é inserido todos os parametros que serão passados na query
let queryParams = configs.googleApi.setConfigs

function buildUrl(searchParam) {
	if (!searchParam){
		console.log('parametro', searchParam)
		return console.log('É preciso passar uma string para busca')
	}
	else
		queryParams.q = searchParam+' star wars'

	let urlParams = []

	Object.keys(queryParams).forEach((item) => {
		urlParams.push(item + "=" + queryParams[item])
	})
	return 'v1?'+urlParams.join('&')
}

const GoogleApi = axios.create({
	baseURL: configs.googleApi.baseURL
})

export default {
	googleSearch(search) {
		return GoogleApi.get(buildUrl(search))
	}

}