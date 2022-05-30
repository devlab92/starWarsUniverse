import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false

Vue.mixin({
	methods: {
		getUrlId(url){
			url = url.split('/')
			return  url[url.length-2]
		}
	}
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
