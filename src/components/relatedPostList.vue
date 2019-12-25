<template>
			
			<div class="card col-sm-3 m-2">
				<img :src="relatedPost.post_thumbnail" class="card-img-top" alt="post_img" />
				<div class="card-body">
				<h5 class="card-title">{{relatedPost.title}}</h5>
				<p class="card-text" v-html="relatedPost.excerpt"></p>
				<p class="card-text"><small class="text-muted">Last Updated {{relatedPost.date | moment}}</small></p>
				<router-link :to="postUrl" class="btn btn-primary">Read More</router-link>
			</div>
		</div>
</template>

<script>
	import moment from 'moment';

	export default{
		name:'RelatedPostList',
		props:['relatedPost'],
		data(){
			return{
				date:this.relatedPost.date,
				postUrl: '/post/' + this.relatedPost.slug,

			}
		},
		filters:{
			moment:function(date){
				return moment(date).fromNow();
			}
		}
	}
</script>