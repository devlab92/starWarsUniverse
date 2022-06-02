# Projeto: Universo Star Wars

A ideia desse projeto é apresentar algumas informações sobre o universo do **Star Wars** (Personagens, Naves, Veículos, Planetas, Espécies).

Para obter as informações será consumido as api's da [SWAPI](https://swapi.dev). Essas api's retornam informações do universo de Star Wars, mas não retornar nenhuma imagem. Para a obtenção de imagens utilzei a api da [Google Could Plataform](https://console.cloud.google.com). Mas como o retorno das imagens não me agradou muito eu fiz uma busca na internet e encontrei um site chamado [Star Wars: A Visual Guide](starwars-visualguide.com), que apresenta a mesma proposta do meu projeto e também utiliza as api's da SWAPI, nesse site o desenvolvedor tirou o capricho de por em seu projeto o arquivo das fotos. Eu percebi que as URL's das imagens seguem um padrão então assim consegui criar, de certa forma, minha própria api. Então em meu projeto você pode escolher qual repositório deseja usar, a da Google ou do Star Wars: A Visual Guide.

# Stack 
- [Vue.js 2.6](https://v2.vuejs.org)
- [Vue Router](https://router.vuejs.org)
- [Axios](https://axios-http.com)
- [Font Awesome](fontawesome.com)
- [BEM](http://getbem.com/introduction/) para metodologia de nomenclaturas em CSS.

# Cloud

É possível acessar o projeto via Nuvem nos seguintes links
- [gitHub Page](https://devlab92.github.io)
- [Heroku](https://lab92-starwars-universe.herokuapp.com)


# Instalação
 
 Clone o projeto em sua máquina local. O projeto encontra-se no meu meu gitHub em [StarWars Universe](https://github.com/devlab92/starWarsUniverse). Instale as dependências `npm install` e rode o projeto `npm run serve` 

 
 # Consideração
A api da google possui um limite de requests, ao optar pelo repositório dela pode ocorrer de não carregar as imagens por esse motivo. 
 