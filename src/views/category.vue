<template>
		<div class="row">
			
			<div class="col-md-8 mt-4">
				<Card v-for="post in posts" :key="post.ID" :post="post"></Card>
			</div>
				<div class="col-md-4 mt-5">
					<CategoriesList></CategoriesList>
					<TagList></TagList>
				</div>
				<Loading v-if="show"></Loading>
			</div>
		</div>
</template>

<script>
	

	import { apiService } from "../core/apiName";

	import Loading from "../components/loading.vue";
	import Card from "../components/card.vue";
	import CategoriesList from "../components/categoriesList.vue";
	import TagList from "../components/tagList.vue";

	const CategoryPostUrl = apiService.getCategoryPost('apiService');
	
	export default{
		name:'Post',
		components:{
			Loading,
			Card,
			CategoriesList,
			TagList
		},
		data(){
			return{
				date:'',
				posts:[],
				show:true,
				URL:''
			}
		},
		
		created(){
			this.URL = this.$route.params.slug;
			this.categoryPost();
		},
		watch: {
			     '$route.params.slug'(value) {
			      this.URL = value;
			      this.show = true;
			      this.categoryPost();
			      
			    }
			  },
		methods:{
			async categoryPost(){
				const { data } = await CategoryPostUrl.getCategoryPost(this.URL);
				this.posts = data.posts;
				this.show = false;
			},

		}
	   
	}
</script>