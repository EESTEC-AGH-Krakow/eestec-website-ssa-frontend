import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scrollto'
import VueCarousel from 'vue-carousel'
import VueScreen from 'vue-screen'
import router from './router'
import store from './store'
import VueTruncate from 'vue-truncate-filter'

library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VueCarousel)
Vue.use(VueTruncate)
Vue.use(VueScreen, 'bootstrap')
Vue.use(VueScrollTo, {
	container: 'body',
	duration: 700,
	easing: 'ease-in-out',
	force: true,
	y: true,
	x: false,
})

Vue.filter('striphtml', function (value) {
	const div = document.createElement('div')
	div.innerHTML = value
	const text = div.textContent || div.innerText || ''
	return text
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
    store,
    mounted: () => document.dispatchEvent(new Event("x-app-rendered"))
}).$mount('#app')
