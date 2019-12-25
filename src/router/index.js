import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import home from '../views/home.vue';
import category from '../views/category.vue';
import post from '../views/post.vue';
import tag from '../views/tag.vue';

export default new Router({
	mode:'history',
	routes:[{
		path:'/',
		component:home
	},
	{
		path:'/category/:slug',
		component:category
	},
	{
		path:'/post/:slug',
		component:post
	},
	{
		path:'/tag/:slug',
		component:tag
	}

	]
})