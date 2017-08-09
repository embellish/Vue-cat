<template>
	<div id="find">
		<div class="header">
			{{msg}}
		</div>
		<div class="list">
			 <ul>
			 	<li v-for="listdata in listData">
			 		 <img :src="listdata.logo"/>
					 <span>{{listdata.name}}</span>
					 <img :src="listdata.src" class="down"/>
			 	</li>
			 </ul>			
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				msg:"发现",
				listData:[
			{logo:"../../../../static/assets/images/found_db.png",name:"豆瓣音乐",src:"../../../../static/assets/images/carnet_enter_click.png"},
			{logo:"../../../../static/assets/images/found_fh.png",name:"凤凰资讯",src:"../../../../static/assets/images/carnet_enter_click.png"},
			{logo:"../../../../static/assets/images/found_db.png",name:"违章查询",src:"../../../../static/assets/images/carnet_enter_click.png"},
			{logo:"../../../../static/assets/images/found_peccancy.png",name:"翼卡在线",src:"../../../../static/assets/images/carnet_enter_click.png"}

				]
			}
		}
	}
</script>
<style type="text/css" scoped>
	#find .header{
		width: 100%;
		height:0.95rem;
		background:#e6e6e6;
		text-align:center;
		line-height:0.95rem;
		font-size:0.37rem;
	}
	#find .list{
		width:100%;
		height:1.20rem;
		line-height:1.20rem;
		text-indent:0.20rem;
	}
	#find .list li{
		border-bottom:1px solid #CCCCCC;
		margin-bottom:0.20rem;
		background:#FFFFFF;
	}
	#find .list img{
		width:0.8rem;
		height:0.8rem;
		float:left;
		margin-left:0.50rem;
		margin-top:0.2rem;
	}
	#find .list .down{
		width:0.22rem;
		height:0.35rem;
		float:right;
		margin-top:0.4rem;
		margin-right:0.50rem;
		
	}
</style>