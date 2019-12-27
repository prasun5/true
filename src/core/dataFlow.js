import ApiService from "./apiService"
import axios from "axios";
const qs = require('qs')

const siteID = `sites/107403796`;

const posts = siteID + '/posts';
const singlePost = siteID + '/posts/slug:';
const singleCategory = siteID + '/categories/slug:';
const singleTag = siteID +'/tags/slug:';
const relatedPost = siteID + 'related';
const tagList = siteID +'/tags';
const categoriesList = siteID +'/categories';

const categoriesPost = siteID + '/posts?category=';

const tagPost = '/read/tags/';

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
	getTagPost(slug){
		return ApiService.get(`${tagPost}${slug}/posts`);
	},

	getCategoryPost(slug){
		return ApiService.get(`${categoriesPost}${slug}`);
	},

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