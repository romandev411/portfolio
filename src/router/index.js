import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~/views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '~/views/About/About.vue')
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: () => import(/* webpackChunkName: "contacts" */ '~/views/Contacts.vue')
	},
	{
		path: '/custom-reset',
		name: 'custom-reset',
		component: () => import(/* webpackChunkName: "CustomReset" */ '~/views/CustomReset/CustomReset.vue')
	},
]

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
  			return savedPosition
		}

		if (to.hash) {
			return {selector: to.hash}
		}

		return {x: 0, y: 0}
	}
})

export default router
