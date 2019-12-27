<template>
		<div class="card mb-4">
			<h5 class="card-header">Tag List</h5>
			<div class="card-body">
				<div class="row">
					<div class="col-lg-12">
						<ul class="list-unstyled mb-0">
							<li v-for="tag in filteredFilms.slice(0, 10)" :key="tag.ID">
								<router-link :to="'/tag/' + tag.slug">{{tag.name}} {{tag.post_count}}</router-link>
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

	const tagListUrl = apiService.getTagList('apiService');

	export default {

		name:'TagList',
		components:{
			Loading
		},
		data(){
			return{
				show:true,
				tagListData:[],
				filterText:[],
			}
		},
		created(){
			this.tagList();		
		},
		methods:{
			async tagList(){
				const { data } = await tagListUrl.getTagList();
				this.tagListData = data.tags;
				this.tagListData.sort((a, b) => a.post_count < b.post_count ? 1 : -1);
				this.show= false;
			}
		},
		computed: {
		    filteredFilms() {
		      let filter = new RegExp(this.filterText, 'i')
		      return this.tagListData.filter(el => el);
		    }

		  },
	
	}
</script>