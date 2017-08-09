<template>
	<div id="box">
		<router-view></router-view>
		<div id="footer">
			<ul>
				<!--<li v-for="item in items">-->
				<router-link v-for="item in items" tag="li" :to="item.path">
					<!--<img :src="item.src">-->
				</router-link>
				<!--</li>-->
			</ul>
		</div>
	</div>
</template>

<script>
	// import Home from "./home/Home.vue"
	export default {
		data(){
			return {

				items:[
					{path:"/"},
					{path:'/navigation'},
					{path:'/find'},
					{path:'/mine'}
				]
				
			}			
		},
		// components:{
		// 	"home":Home
		// }
	}
</script>

<style>
	.router-link-exact-active{
		background:url(../../../static/assets/images/hp_extension_click.png) no-repeat center!important;
		background-size:0.9rem!important;
	}
	#footer{
		width: 100%;
		height:1.08rem;
		background:#fcfcfc;
		position:fixed;
		bottom:0;
		display:flex;
		border-top:1px solid #ccc;			
	}
	#footer ul{
		margin:0 auto;
		width: 6.37rem;
		height:1.08rem;	
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	#footer img{
		width:0.9rem;
		height:0.9rem;
		border:none;
		display: block;
	}
		#footer li:nth-child(1){
		width:0.9rem;
		height: 0.9rem;
		background: url(../../../static/assets/images/hp_extension.png) no-repeat;
		background-size:0.9rem;
	}
		#footer li:nth-child(2){
		width:0.9rem;
		height: 0.9rem;
		background: url(../../../static/assets/images/hp_navigation.png) no-repeat;
		background-size:0.9rem;
	}  
		#footer li:nth-child(3){
		width:0.9rem;
		height: 0.9rem;
		background: url(../../../static/assets/images/hp_found.png) no-repeat;
		background-size:0.9rem;
	} 	
		#footer li:nth-child(4){
		width:0.9rem;
		height: 0.9rem;
		background: url(../../../static/assets/images/hp_me.png) no-repeat;
		background-size:0.9rem;
	}
	
</style>