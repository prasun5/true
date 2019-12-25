<template>
		<div class="row">
				<div class="col-lg-8">
					<h1 class="mt-5">{{categoriesData.name}}</h1>
					<hr>
					<p class="card-text"><small class="text-muted">Posted on {{categoriesData.date | moment}}</small></p>
					<hr>
					
					<hr>
					<p class="card-text" v-html="categoriesData.description"></p>
					
				</div>
				<div class="col-md-4 mt-5">
					<CategoriesList></CategoriesList>
					<TagList></TagList>
				</div>
			</div>
		</div>
</template>

<script>
	import moment from 'moment';

	import { apiService } from "../core/apiName";

	import CategoriesList from "../components/categoriesList.vue";
	import TagList from "../components/tagList.vue";

	const singleCategoryUrl = apiService.getSingleCategory('apiService');
	
	export default{
		name:'Post',
		components:{
			CategoriesList,
			TagList
		},
		data(){
			return{
				date:'',
				categoriesData:[],
			}
		},
		
		created(){
			this.URL = this.$route.params.slug;
			this.singleCategory();
		},
		watch: {
			     '$route.params.slug'(value) {
			      this.URL = value;
			      this.singleCategory();
			    }
			  },
		methods:{
			async singleCategory(){
				const { data } = await singleCategoryUrl.getSingleCategory(this.URL);
				this.categoriesData = data;
			},

		},
		filters:{
			moment:function(date){
				return moment(date).fromNow();
			}
		}
	   
	}
</script>