const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV==='production'
		? '/starWarsUniverse_build/'
		: '/',
	productionSourceMap: false
})
