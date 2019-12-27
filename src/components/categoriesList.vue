<template>
		<div class="card mb-4">
			<h5 class="card-header">Categories List</h5>
			<div class="card-body">
				<div class="row">
					<div class="col-lg-12">
						<ul class="list-unstyled mb-0">
							<li v-for="category in categoriesListData" :key="category.ID" >
								<router-link :to=" '/category/' + category.slug">{{category.name}}</router-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
				<Loading v-if="show"></Loading>
		</div>
</template>

<script>

	import { apiService } from "../core/apiName";
	import Loading from "../components/loading.vue";

	const categoriesListUrl = apiService.getCategoriesList('apiService');

	export default {

		name:'CategoriesList',
		components:{
			Loading
		},
		data(){
			return{
				show:true,
				categoriesListData:[]
			}
		},
		created(){
			this.categoriesList();		
		},
		methods:{
			async categoriesList(){
				const { data } = await categoriesListUrl.getCategoriesList();
				this.categoriesListData = data.categories;
				this.show= false;
			}
		},
	}
</script>