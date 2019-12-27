<template>
		<div class="card my-4">
			<div class="row">
				<div class="col-sm-4">
				<img :src="image" class="card-img-top" alt="post_img" width="100%" height="100%" /> 
			</div>
			<div class="col-sm-8">
				<div class="card-body">
				<h5 class="card-title">{{post.title}}</h5>
				<p class="card-text" v-html="post.excerpt"></p>
				<p class="card-text"><small class="text-muted">Last Updated {{post.date | moment}}</small></p>
				<router-link :to="postUrl" class="btn btn-primary">Read More</router-link>
			</div>
			</div>
		</div>
		</div>
</template>

<script>
	import moment from 'moment';

	export default{
		name:'Card',
		props:['post'],
		data(){
			return{
				date:this.post.date,
				postUrl: '/post/' + this.post.slug,
				URL:'',
				image:'',
			}
		},
		created(){
			if(this.post.post_thumbnail == null){
				this.image = '/dist/no-image.jpg';
			}
			if(this.post.post_thumbnail != null){
				this.image = this.post.post_thumbnail.URL;
			}
		},
		filters:{
			moment:function(date){
				return moment(date).fromNow();
			}
		}
	}
</script>