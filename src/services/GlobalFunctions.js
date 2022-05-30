export default {
	getUrlId(url) {
		// Recebe uma URL que contem o ID no final de sua estrutura 
		if(url == undefined)
			return

		let link = url.split('/')
		return link[link.length - 2]
	}
}