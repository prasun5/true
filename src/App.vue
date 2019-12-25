<template>
      <div id="app">
      	<Header></Header>
        
        <div class="container">
            
              <router-view></router-view>
          
        </div>
        
        <Footer></Footer>
      </div>
</template>

<script>
	
	import Header from "./components/header.vue";
	import Footer from "./components/footer.vue";

      export default {
        name:'app',
        components:{
        	Header,
        	Footer
        }
      }

</script>

<style type="text/css">
  body{
        padding-top: 56px;
  }
</style>