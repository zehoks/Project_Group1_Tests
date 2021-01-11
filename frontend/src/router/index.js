import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import developments from '../views/developments.vue'
import vuex from '../views/vuex.vue'
import Result from '../views/Result.vue'
import Tests1 from '../views/Tests1.vue'
import Tests2 from '../views/Tests2.vue'
import Tests3 from '../views/Tests3.vue'
import Tests4 from '../views/Tests4.vue'

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
		path: '/Tests1',
		name: 'Tests1',
		component: Tests1,
	},
	{
		path: '/Tests2',
		name: 'Tests2',
		component: Tests2,
	},
	{
		path: '/Tests3',
		name: 'Tests3',
		component: Tests3,
	},
	{
		path: '/Tests4',
		name: 'Tests4',
		component: Tests4,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
