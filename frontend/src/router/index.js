import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import developments from '../views/developments.vue'
import vuex from '../views/vuex.vue'
import Result from '../views/Result.vue'
import Tests from '../views/Tests.vue'

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
		path: '/developments',
		name: 'developments',
		component: developments,
	},
	{
		path: '/vuex',
		name: 'vuex',
		component: vuex,
	},
	{
		path: '/Result',
		name: 'Result',
		component: Result,
	},
	{
		path: '/Tests',
		name: 'Tests',
		component: Tests,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
