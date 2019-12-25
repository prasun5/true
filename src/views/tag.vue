<template>
		<div class="row">
				<div class="col-lg-8">
					<h1 class="mt-5">{{tagData.name}}</h1>
					<hr>
					<p class="card-text"><small class="text-muted">Posted on {{tagData.date | moment}}</small></p>
					<hr>
					
					<hr>
					<p class="card-text" v-html="tagData.description"></p>
					
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

	const singleTagUrl = apiService.getSingleTag('apiService');
	
	export default{
		name:'Post',
		components:{
			CategoriesList,
			TagList
		},
		data(){
			return{
				date:'',
				tagData:[],
			}
		},
		
		created(){
			this.URL = this.$route.params.slug;
			this.singleTag();
		},
		watch: {
			     '$route.params.slug'(value) {
			     	this.URL = value;
			      this.singleTag();
			    }
			  },
		methods:{
			async singleTag(){
				const { data } = await singleTagUrl.getSingleTag(this.URL);
				this.tagData = data;
			},
		},
		filters:{
			moment:function(date){
				return moment(date).fromNow();
			}
		}
	   
	}
</script>