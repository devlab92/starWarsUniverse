export default {
	getUrlId(url) {
		// Recebe uma URL que contem o ID no final de sua estrutura 
		if (url == undefined)
			return

		let link = url.split('/')
		return link[link.length - 2]
	},
	transformDate(dateToTransform) {
		let newDate = this.getUrlId(dateToTransform)
		newDate = new Date(dateToTransform)
		if (newDate != 'Invalid Date')
			newDate = newDate.toLocaleDateString()
		return newDate
	},
	translateToPt(word) {
		word = String(word)
		// Se a palavra passada como parametro possui tradução
		// será retornado a tradução
		let translateArray = {
			'blue': 'Azul',
			'red': 'Vermelho',
			'yellow': 'Amarelo',
			'green': 'Verde',
			'brown': 'Marrom',
			'white': 'Branco',
			'black': 'Preto',
			'blond': 'Loiro',
			'fair': 'Claro',
			'light': 'Claro',
			'gold': 'Dourado',
			'grey': 'Cinza',
			'blue-gray': 'Azul acinzentado',
			'auburn': 'Ruivo',
			'orange': 'Laranja',
			'green-tan': 'Castanho esverdeado',
			'hazel': 'Avelã',
			'pale': 'Pálido',
			'metal': 'Metálico',
			'dark': 'Escuro',
			'brown mottle': 'Manchado de marrom',
			'brown green': 'Manchado de verde',
			'pink': 'Rosa',
			'male': 'Masculino',
			'female': 'Feminino'
		}
		var translated = word

		if (word == 'n/a') {
			translated = 'Não definido'
		}

		if (word == 'unknown')
			translated = 'Desconhecido'

		if (word == 'none')
			translated = 'Não possui'

		Object.keys(translateArray).find((item) => item == word ? translated = translateArray[item] : '')

		return translated
	},
	fillArrayPeople() {
		return [{
			"name":"Luke Skywalker",
			"height":"172",
			"mass":"77",
			"hair_color":"blond",
			"skin_color":"fair",
			"eye_color":"blue",
			"birth_year":"19BBY",
			"gender":"male",
			"homeworld":"https://swapi.dev/api/planets/1/",
			"films":[
				{
					"title":"A New Hope",
					"episode_id":4,
					"opening_crawl":"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
					"director":"George Lucas",
					"producer":"Gary Kurtz, Rick McCallum",
					"release_date":"1977-05-25",
					"characters":[
						"https://swapi.dev/api/people/1/",
						"https://swapi.dev/api/people/2/",
						"https://swapi.dev/api/people/3/",
						"https://swapi.dev/api/people/4/",
						"https://swapi.dev/api/people/5/",
						"https://swapi.dev/api/people/6/",
						"https://swapi.dev/api/people/7/",
						"https://swapi.dev/api/people/8/",
						"https://swapi.dev/api/people/9/",
						"https://swapi.dev/api/people/10/",
						"https://swapi.dev/api/people/12/",
						"https://swapi.dev/api/people/13/",
						"https://swapi.dev/api/people/14/",
						"https://swapi.dev/api/people/15/",
						"https://swapi.dev/api/people/16/",
						"https://swapi.dev/api/people/18/",
						"https://swapi.dev/api/people/19/",
						"https://swapi.dev/api/people/81/"
					],
					"planets":[
						"https://swapi.dev/api/planets/1/",
						"https://swapi.dev/api/planets/2/",
						"https://swapi.dev/api/planets/3/"
					],
					"starships":[
						"https://swapi.dev/api/starships/2/",
						"https://swapi.dev/api/starships/3/",
						"https://swapi.dev/api/starships/5/",
						"https://swapi.dev/api/starships/9/",
						"https://swapi.dev/api/starships/10/",
						"https://swapi.dev/api/starships/11/",
						"https://swapi.dev/api/starships/12/",
						"https://swapi.dev/api/starships/13/"
					],
					"vehicles":[
						"https://swapi.dev/api/vehicles/4/",
						"https://swapi.dev/api/vehicles/6/",
						"https://swapi.dev/api/vehicles/7/",
						"https://swapi.dev/api/vehicles/8/"
					],
					"species":[
						"https://swapi.dev/api/species/1/",
						"https://swapi.dev/api/species/2/",
						"https://swapi.dev/api/species/3/",
						"https://swapi.dev/api/species/4/",
						"https://swapi.dev/api/species/5/"
					],
					"created":"2014-12-10T14:23:31.880000Z",
					"edited":"2014-12-20T19:49:45.256000Z",
					"url":"https://swapi.dev/api/films/1/",
					"image":"https://starwars-visualguide.com/assets/img/films/1.jpg"
				},
				{
					"title":"The Empire Strikes Back",
					"episode_id":5,
					"opening_crawl":"It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
					"director":"Irvin Kershner",
					"producer":"Gary Kurtz, Rick McCallum",
					"release_date":"1980-05-17",
					"characters":[
						"https://swapi.dev/api/people/1/",
						"https://swapi.dev/api/people/2/",
						"https://swapi.dev/api/people/3/",
						"https://swapi.dev/api/people/4/",
						"https://swapi.dev/api/people/5/",
						"https://swapi.dev/api/people/10/",
						"https://swapi.dev/api/people/13/",
						"https://swapi.dev/api/people/14/",
						"https://swapi.dev/api/people/18/",
						"https://swapi.dev/api/people/20/",
						"https://swapi.dev/api/people/21/",
						"https://swapi.dev/api/people/22/",
						"https://swapi.dev/api/people/23/",
						"https://swapi.dev/api/people/24/",
						"https://swapi.dev/api/people/25/",
						"https://swapi.dev/api/people/26/"
					],
					"planets":[
						"https://swapi.dev/api/planets/4/",
						"https://swapi.dev/api/planets/5/",
						"https://swapi.dev/api/planets/6/",
						"https://swapi.dev/api/planets/27/"
					],
					"starships":[
						"https://swapi.dev/api/starships/3/",
						"https://swapi.dev/api/starships/10/",
						"https://swapi.dev/api/starships/11/",
						"https://swapi.dev/api/starships/12/",
						"https://swapi.dev/api/starships/15/",
						"https://swapi.dev/api/starships/17/",
						"https://swapi.dev/api/starships/21/",
						"https://swapi.dev/api/starships/22/",
						"https://swapi.dev/api/starships/23/"
					],
					"vehicles":[
						"https://swapi.dev/api/vehicles/8/",
						"https://swapi.dev/api/vehicles/14/",
						"https://swapi.dev/api/vehicles/16/",
						"https://swapi.dev/api/vehicles/18/",
						"https://swapi.dev/api/vehicles/19/",
						"https://swapi.dev/api/vehicles/20/"
					],
					"species":[
						"https://swapi.dev/api/species/1/",
						"https://swapi.dev/api/species/2/",
						"https://swapi.dev/api/species/3/",
						"https://swapi.dev/api/species/6/",
						"https://swapi.dev/api/species/7/"
					],
					"created":"2014-12-12T11:26:24.656000Z",
					"edited":"2014-12-15T13:07:53.386000Z",
					"url":"https://swapi.dev/api/films/2/",
					"image":"https://starwars-visualguide.com/assets/img/films/2.jpg"
				},
				{
					"title":"Revenge of the Sith",
					"episode_id":3,
					"opening_crawl":"War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
					"director":"George Lucas",
					"producer":"Rick McCallum",
					"release_date":"2005-05-19",
					"characters":[
						"https://swapi.dev/api/people/1/",
						"https://swapi.dev/api/people/2/",
						"https://swapi.dev/api/people/3/",
						"https://swapi.dev/api/people/4/",
						"https://swapi.dev/api/people/5/",
						"https://swapi.dev/api/people/6/",
						"https://swapi.dev/api/people/7/",
						"https://swapi.dev/api/people/10/",
						"https://swapi.dev/api/people/11/",
						"https://swapi.dev/api/people/12/",
						"https://swapi.dev/api/people/13/",
						"https://swapi.dev/api/people/20/",
						"https://swapi.dev/api/people/21/",
						"https://swapi.dev/api/people/33/",
						"https://swapi.dev/api/people/35/",
						"https://swapi.dev/api/people/46/",
						"https://swapi.dev/api/people/51/",
						"https://swapi.dev/api/people/52/",
						"https://swapi.dev/api/people/53/",
						"https://swapi.dev/api/people/54/",
						"https://swapi.dev/api/people/55/",
						"https://swapi.dev/api/people/56/",
						"https://swapi.dev/api/people/58/",
						"https://swapi.dev/api/people/63/",
						"https://swapi.dev/api/people/64/",
						"https://swapi.dev/api/people/67/",
						"https://swapi.dev/api/people/68/",
						"https://swapi.dev/api/people/75/",
						"https://swapi.dev/api/people/78/",
						"https://swapi.dev/api/people/79/",
						"https://swapi.dev/api/people/80/",
						"https://swapi.dev/api/people/81/",
						"https://swapi.dev/api/people/82/",
						"https://swapi.dev/api/people/83/"
					],
					"planets":[
						"https://swapi.dev/api/planets/1/",
						"https://swapi.dev/api/planets/2/",
						"https://swapi.dev/api/planets/5/",
						"https://swapi.dev/api/planets/8/",
						"https://swapi.dev/api/planets/9/",
						"https://swapi.dev/api/planets/12/",
						"https://swapi.dev/api/planets/13/",
						"https://swapi.dev/api/planets/14/",
						"https://swapi.dev/api/planets/15/",
						"https://swapi.dev/api/planets/16/",
						"https://swapi.dev/api/planets/17/",
						"https://swapi.dev/api/planets/18/",
						"https://swapi.dev/api/planets/19/"
					],
					"starships":[
						"https://swapi.dev/api/starships/2/",
						"https://swapi.dev/api/starships/32/",
						"https://swapi.dev/api/starships/48/",
						"https://swapi.dev/api/starships/59/",
						"https://swapi.dev/api/starships/61/",
						"https://swapi.dev/api/starships/63/",
						"https://swapi.dev/api/starships/64/",
						"https://swapi.dev/api/starships/65/",
						"https://swapi.dev/api/starships/66/",
						"https://swapi.dev/api/starships/68/",
						"https://swapi.dev/api/starships/74/",
						"https://swapi.dev/api/starships/75/"
					],
					"vehicles":[
						"https://swapi.dev/api/vehicles/33/",
						"https://swapi.dev/api/vehicles/50/",
						"https://swapi.dev/api/vehicles/53/",
						"https://swapi.dev/api/vehicles/56/",
						"https://swapi.dev/api/vehicles/60/",
						"https://swapi.dev/api/vehicles/62/",
						"https://swapi.dev/api/vehicles/67/",
						"https://swapi.dev/api/vehicles/69/",
						"https://swapi.dev/api/vehicles/70/",
						"https://swapi.dev/api/vehicles/71/",
						"https://swapi.dev/api/vehicles/72/",
						"https://swapi.dev/api/vehicles/73/",
						"https://swapi.dev/api/vehicles/76/"
					],
					"species":[
						"https://swapi.dev/api/species/1/",
						"https://swapi.dev/api/species/2/",
						"https://swapi.dev/api/species/3/",
						"https://swapi.dev/api/species/6/",
						"https://swapi.dev/api/species/15/",
						"https://swapi.dev/api/species/19/",
						"https://swapi.dev/api/species/20/",
						"https://swapi.dev/api/species/23/",
						"https://swapi.dev/api/species/24/",
						"https://swapi.dev/api/species/25/",
						"https://swapi.dev/api/species/26/",
						"https://swapi.dev/api/species/27/",
						"https://swapi.dev/api/species/28/",
						"https://swapi.dev/api/species/29/",
						"https://swapi.dev/api/species/30/",
						"https://swapi.dev/api/species/33/",
						"https://swapi.dev/api/species/34/",
						"https://swapi.dev/api/species/35/",
						"https://swapi.dev/api/species/36/",
						"https://swapi.dev/api/species/37/"
					],
					"created":"2014-12-20T18:49:38.403000Z",
					"edited":"2014-12-20T20:47:52.073000Z",
					"url":"https://swapi.dev/api/films/6/",
					"image":"https://starwars-visualguide.com/assets/img/films/6.jpg"
				},
				{
					"title":"Return of the Jedi",
					"episode_id":6,
					"opening_crawl":"Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
					"director":"Richard Marquand",
					"producer":"Howard G. Kazanjian, George Lucas, Rick McCallum",
					"release_date":"1983-05-25",
					"characters":[
						"https://swapi.dev/api/people/1/",
						"https://swapi.dev/api/people/2/",
						"https://swapi.dev/api/people/3/",
						"https://swapi.dev/api/people/4/",
						"https://swapi.dev/api/people/5/",
						"https://swapi.dev/api/people/10/",
						"https://swapi.dev/api/people/13/",
						"https://swapi.dev/api/people/14/",
						"https://swapi.dev/api/people/16/",
						"https://swapi.dev/api/people/18/",
						"https://swapi.dev/api/people/20/",
						"https://swapi.dev/api/people/21/",
						"https://swapi.dev/api/people/22/",
						"https://swapi.dev/api/people/25/",
						"https://swapi.dev/api/people/27/",
						"https://swapi.dev/api/people/28/",
						"https://swapi.dev/api/people/29/",
						"https://swapi.dev/api/people/30/",
						"https://swapi.dev/api/people/31/",
						"https://swapi.dev/api/people/45/"
					],
					"planets":[
						"https://swapi.dev/api/planets/1/",
						"https://swapi.dev/api/planets/5/",
						"https://swapi.dev/api/planets/7/",
						"https://swapi.dev/api/planets/8/",
						"https://swapi.dev/api/planets/9/"
					],
					"starships":[
						"https://swapi.dev/api/starships/2/",
						"https://swapi.dev/api/starships/3/",
						"https://swapi.dev/api/starships/10/",
						"https://swapi.dev/api/starships/11/",
						"https://swapi.dev/api/starships/12/",
						"https://swapi.dev/api/starships/15/",
						"https://swapi.dev/api/starships/17/",
						"https://swapi.dev/api/starships/22/",
						"https://swapi.dev/api/starships/23/",
						"https://swapi.dev/api/starships/27/",
						"https://swapi.dev/api/starships/28/",
						"https://swapi.dev/api/starships/29/"
					],
					"vehicles":[
						"https://swapi.dev/api/vehicles/8/",
						"https://swapi.dev/api/vehicles/16/",
						"https://swapi.dev/api/vehicles/18/",
						"https://swapi.dev/api/vehicles/19/",
						"https://swapi.dev/api/vehicles/24/",
						"https://swapi.dev/api/vehicles/25/",
						"https://swapi.dev/api/vehicles/26/",
						"https://swapi.dev/api/vehicles/30/"
					],
					"species":[
						"https://swapi.dev/api/species/1/",
						"https://swapi.dev/api/species/2/",
						"https://swapi.dev/api/species/3/",
						"https://swapi.dev/api/species/5/",
						"https://swapi.dev/api/species/6/",
						"https://swapi.dev/api/species/8/",
						"https://swapi.dev/api/species/9/",
						"https://swapi.dev/api/species/10/",
						"https://swapi.dev/api/species/15/"
					],
					"created":"2014-12-18T10:39:33.255000Z",
					"edited":"2014-12-20T09:48:37.462000Z",
					"url":"https://swapi.dev/api/films/3/",
					"image":"https://starwars-visualguide.com/assets/img/films/3.jpg"
				}
			],
			"species":[
				
			],
			"vehicles":[
				{
					"name":"Snowspeeder",
					"model":"t-47 airspeeder",
					"manufacturer":"Incom corporation",
					"cost_in_credits":"unknown",
					"length":"4.5",
					"max_atmosphering_speed":"650",
					"crew":"2",
					"passengers":"0",
					"cargo_capacity":"10",
					"consumables":"none",
					"vehicle_class":"airspeeder",
					"pilots":[
						"https://swapi.dev/api/people/1/",
						"https://swapi.dev/api/people/18/"
					],
					"films":[
						"https://swapi.dev/api/films/2/"
					],
					"created":"2014-12-15T12:22:12Z",
					"edited":"2014-12-20T21:30:21.672000Z",
					"url":"https://swapi.dev/api/vehicles/14/",
					"image":"https://starwars-visualguide.com/assets/img/vehicles/14.jpg"
				},
				{
					"name":"Imperial Speeder Bike",
					"model":"74-Z speeder bike",
					"manufacturer":"Aratech Repulsor Company",
					"cost_in_credits":"8000",
					"length":"3",
					"max_atmosphering_speed":"360",
					"crew":"1",
					"passengers":"1",
					"cargo_capacity":"4",
					"consumables":"1 day",
					"vehicle_class":"speeder",
					"pilots":[
						"https://swapi.dev/api/people/1/",
						"https://swapi.dev/api/people/5/"
					],
					"films":[
						"https://swapi.dev/api/films/3/"
					],
					"created":"2014-12-18T11:20:04.625000Z",
					"edited":"2014-12-20T21:30:21.693000Z",
					"url":"https://swapi.dev/api/vehicles/30/",
					"image":"https://starwars-visualguide.com/assets/img/vehicles/30.jpg"
				}
			],
			"starships":[
				{
					"name":"X-wing",
					"model":"T-65 X-wing",
					"manufacturer":"Incom Corporation",
					"cost_in_credits":"149999",
					"length":"12.5",
					"max_atmosphering_speed":"1050",
					"crew":"1",
					"passengers":"0",
					"cargo_capacity":"110",
					"consumables":"1 week",
					"hyperdrive_rating":"1.0",
					"MGLT":"100",
					"starship_class":"Starfighter",
					"pilots":[
						"https://swapi.dev/api/people/1/",
						"https://swapi.dev/api/people/9/",
						"https://swapi.dev/api/people/18/",
						"https://swapi.dev/api/people/19/"
					],
					"films":[
						"https://swapi.dev/api/films/1/",
						"https://swapi.dev/api/films/2/",
						"https://swapi.dev/api/films/3/"
					],
					"created":"2014-12-12T11:19:05.340000Z",
					"edited":"2014-12-20T21:23:49.886000Z",
					"url":"https://swapi.dev/api/starships/12/",
					"image":"https://starwars-visualguide.com/assets/img/starships/12.jpg"
				},
				{
					"name":"Imperial shuttle",
					"model":"Lambda-class T-4a shuttle",
					"manufacturer":"Sienar Fleet Systems",
					"cost_in_credits":"240000",
					"length":"20",
					"max_atmosphering_speed":"850",
					"crew":"6",
					"passengers":"20",
					"cargo_capacity":"80000",
					"consumables":"2 months",
					"hyperdrive_rating":"1.0",
					"MGLT":"50",
					"starship_class":"Armed government transport",
					"pilots":[
						"https://swapi.dev/api/people/1/",
						"https://swapi.dev/api/people/13/",
						"https://swapi.dev/api/people/14/"
					],
					"films":[
						"https://swapi.dev/api/films/2/",
						"https://swapi.dev/api/films/3/"
					],
					"created":"2014-12-15T13:04:47.235000Z",
					"edited":"2014-12-20T21:23:49.900000Z",
					"url":"https://swapi.dev/api/starships/22/",
					"image":"https://starwars-visualguide.com/assets/img/starships/22.jpg"
				}
			],
			"created":"2014-12-09T13:50:51.644000Z",
			"edited":"2014-12-20T21:17:56.891000Z",
			"url":"https://swapi.dev/api/people/1/",
			"image":"https://starwars-visualguide.com/assets/img/characters/1.jpg"
		}]
		}
}