<template>
		<div class="row">
				<div class="col-lg-8">
					<h1 class="mt-5">{{post.title}}</h1>
					<hr>
					<p class="card-text"><small class="text-muted">Posted on {{post.date | moment}}</small></p>
					<hr>
					<img :src="image" class="card-img-top" alt="post_img" />
					<hr>
					<p class="card-text" v-html="post.content"></p>
					
				</div>
				<div class="col-md-4 mt-5">
					<CategoriesList></CategoriesList>
					<TagList></TagList>
				</div>

				<div class="col-lg-12 mt-5">
					<div class="row">
							<!-- <RelatedPostList v-for="relatedPost in relatedPostData.slice(0, 3)" :key="post.ID" :relatedPost="relatedPost"></RelatedPostList> -->
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	import moment from 'moment';

	import { apiService } from "../core/apiName";

	import CategoriesList from "../components/categoriesList.vue";
	import TagList from "../components/tagList.vue";
	import RelatedPostList from "../components/relatedPostList.vue";

	import qs from 'qs';
	import axios from 'axios';

const qss = require('qs')
const axioss = require('axios')


	const singlePostUrl = apiService.getSinglePost('apiService');
	const relatedPostUrl = apiService.getRelatedPost('apiService');
	
	export default{
		name:'Post',
		components:{
			CategoriesList,
			TagList,
			RelatedPostList
		},
		data(){
			return{
				date:'',
				URL:'',
				relatedPostId:'',
				post:[],
				relatedPostData:[],
				image:''
			}
		},
		created(){
			this.URL = this.$route.params.slug;
			this.singlePost();


axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.post(`https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/7218/related`, 
  { 
  	method:'POST',
  	withCredentials : true,
    headers: {
    	"Access-Control-Allow-Origin": "*",
    	'Access-Control-Allow-Credentials':true,
    'Content-Type' : 'application/x-www-form-urlencoded'
  }, 
  })
  .then(function (response) {
    console.log(response);
    return response
  })
  .catch(function (error) {
    console.log(error);
  });

		},
		methods:{
			async singlePost(){
				const { data } = await singlePostUrl.getSinglePost(this.URL);
				this.post = data;
				this.relatedPostData = data;
				this.image = data.post_thumbnail.URL;
				
				// this.relatedPost();
			},

			async relatedPost(){
				console.log(this.relatedPostId);
				const { data } = await relatedPostUrl.getRelatedPost(this.relatedPostId);
				this.relatedPostData = data;
				console.log(data);
			},
	
		},
		filters:{
			moment:function(date){
				return moment(date).fromNow();
			}
		}
	   
	}
</script>