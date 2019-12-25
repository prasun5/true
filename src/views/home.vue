<template>
	<div class="row">
		<Card v-for="post in posts" :key="post.ID" :post="post"></Card>
	</div>
	
</template>

<script type="text/javascript">

import Card from "../components/card.vue";
import { apiService } from "../core/apiName";


const apiName = apiService.getPost('apiService');

	export default{
		name:'home',
		components:{
			Card
		},

		data(){
			return {
				posts:[]
			}
		},
		created(){
			this.getPosts();
		},
		methods:{
			async getPosts(){
				const { data } = await apiName.getPost();
				this.posts = data.posts;
				console.log(this.posts);
			}
		}	
	}
</script>