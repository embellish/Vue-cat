<template>
	<div id="nav">
		<div class="header">
			  <img src="../../../../static/assets/images/back.png" class="go"/>
			  <div class="search">
			  	  <input type="" name="" id="" value="" class="ipt" placeholder="请输入兴趣点"/>
			  	  <img src="../../../../static/assets/images/home_weizhang_click.png"/>
			  </div>
		</div>
		<div class='nav'>
			 <ul>
			 	<li v-for="pagedata in pageData">
			 		<img :src="pagedata.src"/>
			 		<span>{{pagedata.name}}</span>			 	
			 	</li>
			 </ul>
		</div>
		<div class="collect" v-for="msgs in msg">
			 <span>{{msgs.name}}</span>
			 <img :src="msgs.src"/>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{			
				 pageData:[
				 	{src:"../../../../static/assets/images/poi_parking.png",name:"停车场"},
				 	{src:"../../../../static/assets/images/poi_gas.png",name:"加油站"},
				 	{src:"../../../../static/assets/images/poi_carservice.png",name:"汽车服务"},
				 	{src:"../../../../static/assets/images/poi_food.png",name:"餐饮美食"},
				 	{src:"../../../../static/assets/images/poi_hotel.png",name:"宾馆住宿"},
				 	{src:"../../../../static/assets/images/poi_bank.png",name:"ATM银行"},
				 	{src:"../../../../static/assets/images/poi_market.png",name:"商城超市"},
				 	{src:"../../../../static/assets/images/poi_house.png",name:"小区地名"}
				 ],
				 msg:[
				 	{src:"../../../../static/assets/images/search_down.png",name:"收藏地点"},
				 	{src:"../../../../static/assets/images/collect_delete_click.png",name:"历史目的地"}
				 ]
			}
		}
	}
</script>
<style type="text/css" scoped>
	#nav{
		width: 100%;
		height:100%;
		height:0.95rem;
		background:#e6e6e6;
	}
	#nav .ipt{
		width: 5.82rem;
		height: 0.72rem;
		border:none;
		margin-top:6px;
		text-indent:0.2rem;
		color:#c4c4c4;
		font-size:0.3rem;
	}

	#nav .header .go{
		width: 0.6rem;
		float: left;
		margin-left:0.5rem;
		margin-right:0.2rem;
		padding-top:0.2rem;		
	}
	.search{
		position: relative;
		height:0.95rem;
	}
	.search img{
		width: 0.5rem;
		position:absolute;
		right:36px;
		top:12px;
	}
	.nav ul{
		display:flex;
		flex-wrap: wrap;
		align-items:center;
		justify-content: center;
		background: #FFFFFF;
	}
	.nav li{
		width:1.87rem;
		height:1.5rem;
		border-right:1px solid #CCCCCC;
		border-bottom:1px solid #CCCCCC;
		display: flex;
	 	flex-direction: column;
	 	align-content: center;
	 	justify-content: center;
	 	align-items: center;	
	}
	.nav li img{
		width: 0.7rem;
		padding-bottom:0.15rem;
	}
	.collect{
		background:#FFFFFF;
		width: 100%;
		height:0.8rem;
		line-height:0.8rem;
		margin-top:0.22rem;
		border-top:1px solid #CCCCCC;
		color: #fe8100;
		font-size:0.3rem;
		padding:0 0.5rem;
		display:flex;
		align-items: center;
		justify-content:space-between;
	}
	.collect img{
		width:0.45rem;
	
	} 
	
</style>