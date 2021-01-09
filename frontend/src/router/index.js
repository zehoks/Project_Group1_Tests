import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import lol from '../views/lol.vue'
import vuex from '../views/vuex.vue'
import NN from '../views/NN.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	// {
	// 	path: '/tests',
	// 	name: 'Tests',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () =>
	// 		import(/* webpackChunkName: "about" */ '../views/Tests.vue'),
	// },
	{
		path: '/lol',
		name: 'lol',
		component: lol,
	},
	{
		path: '/vuex',
		name: 'vuex',
		component: vuex,
	},
	{
		path: '/NN',
		name: 'NN',
		component: NN,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
