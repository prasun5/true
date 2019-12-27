<template>
		<div class="row">
				<div class="col-md-8 mt-4">
					<Card v-for="post in posts" :key="post.ID" :post="post"></Card>
					
					<Empty v-if="posts.length == 0"></Empty>
				</div>
				<div class="col-md-4 mt-5">
					<CategoriesList></CategoriesList>
					<TagList></TagList>
				</div>
				<Loading v-if="show"></Loading>
			</div>
</template>

<script>

	import { apiService } from "../core/apiName";

	import Card from "../components/card.vue";
	import Empty from "../components/empty.vue";
	import Loading from "../components/loading.vue";
	import CategoriesList from "../components/categoriesList.vue";
	import TagList from "../components/tagList.vue";

	const tagPostUrl = apiService.getTagPost('apiService');
	
	export default{
		name:'Post',
		components:{
			Loading,
			CategoriesList,
			TagList,
			Empty,
			Card
		},
		data(){
			return{
				date:'',
				show:true,
				posts:[],
				url:''
			}
		},
		
		created(){
			this.url = this.$route.params.slug;
			this.tagPost();
		},
		watch: {
			     '$route.params.slug'(value) {
			     	this.url = value;
			     	this.show = true;
			      	this.tagPost();
			    }
			  },
		methods:{
			async tagPost(){
				const { data } = await tagPostUrl.getTagPost(this.url);
				this.posts = data.posts;
				this.show = false;
			},
		},
	   
	}
</script>