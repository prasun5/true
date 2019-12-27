<template>
	<div class="row">
		<Card v-for="post in posts" :key="post.ID" :post="post"></Card>
		<Loading v-if="show"></Loading>
	</div>
	
</template>

<script type="text/javascript">

import Card from "../components/card.vue";
import Loading from "../components/loading.vue";
import { apiService } from "../core/apiName";


const apiName = apiService.getPost('apiService');

	export default{
		name:'home',
		components:{
			Card,
			Loading
		},

		data(){
			return {
				posts:[],
				show:true
			}
		},
		created(){
			this.getPosts();
		},
		methods:{
			async getPosts(){
				const { data } = await apiName.getPost();
				this.posts = data.posts;
				this.show = false;
			}
		}	
	}
</script>