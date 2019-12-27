<template>
	<nav class=" navbar navbar-expand-lg navbar-white bg-white fixed-top">
		<div class="container" align="center">
			<div class="nav-bar-header">
				<a href="/" >
					<img src="../assets/truecaller_logo.png" width="100" height="50" />
				</a>
			</div>
		</div>
	</nav>
</template>

<script type="text/javascript">
	export default{
		name:'Header',
		
	}
</script>
<style type="text/css">
	nav{
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  		transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	}
	.container{
		display: block!important;
	}

	.nav-bar-header img{
		width: 200px!important;
	}
</style>