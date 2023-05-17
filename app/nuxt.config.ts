export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"nuxt-icon",
		"@pinia/nuxt",
		"@nuxtjs/device",
		"@nuxt/image-edge",
		"@formkit/nuxt",
	],

	pinia: {
		autoImports: ["defineStore"],
	},

	devtools: {
		enabled: true,
	},
});
