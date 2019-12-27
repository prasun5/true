<template>
	<div class="load-wrapp">
            <div class="load">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
</template>
<script>

	export default{
		name:'Loading',
		data(){
			return{
				date:''
			}
		},
	}
</script>
<style type="text/css">

/* -----------------------------------------
  =CSS3 Loading animations
-------------------------------------------- */

/* =Elements style
---------------------- */
.load-wrapp {
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px 10px 0;
    border-radius: 5px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    background: #FFF;
}
.load{
	    margin-right: 0;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: 100px;
    margin: auto;
}

.load-wrapp p {padding: 0 0 20px;}
.load-wrapp:last-child {margin-right: 0;}

.line {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #4b9cdb;
}

/* =Animate the stuff
------------------------ */
.load .line:nth-last-child(1) {animation: loading 1.5s 1s infinite;}
.load .line:nth-last-child(2) {animation: loading 1.5s .5s infinite;}
.load .line:nth-last-child(3) {animation: loading 1.5s 0s infinite;}


@keyframes loading {
    0 {width: 15px;}
    50% {width: 35px;}
    100% {width: 15px;}
}


</style>