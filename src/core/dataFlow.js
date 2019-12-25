import ApiService from "./apiService"
import axios from "axios";
const qs = require('qs')

const posts = '/posts';
const singlePost = '/posts/slug:';
const singleCategory = '/categories/slug:';
const singleTag = '/tags/slug:';
const relatedPost = 'related';
const tagList = '/tags';
const categoriesList = '/categories';

const requestBodyData = {
	'size':3
}
const config = {
	'access-control-allow-credentials':true,
	headers:{
		'content-type': 'application/json'
	}
}
export default {
	getPost(){
		return ApiService.get(`${posts}`);
	},

	getSinglePost(slug){
		return ApiService.get(`${singlePost}${slug}`);
	},

	getSingleCategory(slug){
		return ApiService.get(`${singleCategory}${slug}`);
	},

	getSingleTag(slug){
		return ApiService.get(`${singleTag}${slug}`);
	},

	getTagList(slug){
		return ApiService.get(`${tagList}`);
	},

	getCategoriesList(slug){
		return ApiService.get(`${categoriesList}`);
	},

	getRelatedPost(postId){
		console.log(postId);

		return axios.post('https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/7218/related')
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });

		// return ApiService.post(`${posts}/${postId}/${relatedPost}`);
	}
}