<template>
	<div id="bg">
		<div id="header">
			<header class="mine_header">
				<div class="mine_login">
					<img src="../../../../static/assets/images/me_user.png">
					<p class="text">
						<router-link to="/login" tag="span"><span class="now">立即登录</span></router-link>
						<router-link to='/register' tag="span"><span class="use">用钛马星，开启智能生活，马上注册></span></router-link>
					</p>
					
				</div>
			</header>
		</div>
		<div class="list">
			<ul>
				<li v-for="listadta in listData">
					<img :src="listadta.src"/>
					<span>{{listadta.name}}</span>
				</li>
			</ul>
		</div>
		<div class="list_down">
			<ul>
				<li v-for="listdown in listDown">
					<img :src='listdown.logos' class="logo"/>
					<span>{{listdown.name}}</span>
					<img :src="listdown.src" class="list_img"/>
				</li>
			</ul>
		</div>
		
	
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				listData:[
					{src:"../../../../static/assets/images/toolbox_radius.png",name:"违章查询"},
					{src:"../../../../static/assets/images/toolbox_collection.png",name:"按天小保险"},
					{src:"../../../../static/assets/images/toolbox_data.png",name:"救援服务"}					
				],
				listDown:[
					{logos:"../../../../static/assets/images/peccancy_keyword.png",name:"插件管理",src:"../../../../static/assets/images/carnet_enter.png"},
					{logos:"../../../../static/assets/images/peccancy_car.png",name:"清除缓存",src:"../../../../static/assets/images/carnet_enter.png"},
					{logos:"../../../../static/assets/images/peccancy_engine_number.png",name:"帮助与反馈",src:"../../../../static/assets/images/carnet_enter.png"},
					{logos:"../../../../static/assets/images/peccancy_frame_number.png",name:"关于",src:"../../../../static/assets/images/carnet_enter.png"}

				]
			}
		}
	}
</script>
<style type="text/css" scoped>
	#bg{
		width: 100%;
		height: 100%;
		background: #ededed;
	}
	#header{
		background:-webkit-gradient(linear, 0 100%, 0 0, from(#ff7634), to(#f29e39));
		background:-webkit-linear-gradient(#ff7634 0%, #f29e39 100%);
		background:-moz-linear-gradient(#ff7634 0%, #f29e39 100%);
		background:-o-linear-gradient(#ff7634 0%, #f29e39 100%);
		background:linear-gradient(#ff7634 0%, #f29e39 100%);
			height: 2.7rem;
		padding:0 0.5rem;
		padding-top: 0.6rem;
		box-sizing: border-box;
	}
	
	.mine_header img{
		width:1.2rem;
		float: left;
	}
	.mine_logo{
		width:1.3rem;
		height:1.3rem;
		/*padding:0.7rem 0.5rem;*/
	}
	.now{
		font-size: 18px;
	}
	.mine_header{
		color:#fff;
	}
	.text{
		padding-top: 0.2rem;
	}
	.text span{
		display: block;
		margin-bottom: .15rem;
	}

	
	.mine_logo{
		width: 0.55rem;
		margin:0.3rem 0;
		float: left;
		margin-right:0.4rem;
	}
	.next{
		float: right;
		width: 0.2rem;
		margin:0.4rem 0;
	}
	.mine_login img{
		margin-right: .2rem;
	}
	.list{
		width:100%;
		height:2.5rem;
		background:#FFFFFF;
		margin-top:0.28rem;
	}
	.list img{
		width:0.78rem;
		margin-bottom:0.25rem;
	}
	.list ul{
		height: 2.4rem;
		background: #fff;
		display: flex;
		justify-content:space-around;
		padding-top: 0.6rem;
		font-size: 16px;

		
	}
	.list li{
		width:1.87rem;
		display:flex;
		flex-direction:column;
		align-items:center;
		text-align: center;
		margin-bottom: 0.3rem;
		
	}
	.list_down li{
		width:6.35rem;
		height:1.20rem;
		border-bottom:1px solid #CCCCCC;
		margin-left:0.68rem;
		line-height:1.20rem;
		text-indent:0.4rem;
		font-size:0.3rem;
	}
	.list_down li .logo{
		float:left;
		margin-top:0.3rem;	
		width:0.55rem;
		
	}
	.list_down .list_img{
		float:right;
		width:0.20rem;
		height:0.33rem;
		margin:0.4rem 0;
	}

</style>
