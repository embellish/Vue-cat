<template>
	<div id="login">
		<div id="header">
			<router-link to="/mine"><img src="../../../static/assets/images/back.png" class="up"/></router-link>
			<span>{{msg}}</span>
		</div>
		<div class="logo">
			 <img src="../../../static/assets/images/login_logo.png"/>
		</div>
		<form class="login_from">
			<div class="username">
				<span class="user_img"><img src="../../../static/assets/images/login_phone_number.png" ></span>
				<input type="text" name="" placeholder="手机号码" id="login_user" v-model="id">
			</div>
			<div class="password">
				<span class="pass_img"><img src="../../../static/assets/images/login_keyword.png" ></span>
				<input type="password" name="" placeholder="密码" id="login_password" v-model="pws">
			</div>
			<div class="forget">{{mgs}}</div>
			<button class="btn" @click="logoin">登录</button>			
		</form>
		<div class="register">
			<router-link to="/register"><button class="btn_reg" >立即注册</button></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg:"登录",
				mgs:"忘记密码?",
				id:"",
				pws:""
			}
		},
			methods:{
				logoin(){
					var logo = {
					   id:this.id,
					   pws:this.pws
					}
					if (this.id == "" || this.pws == "") {
						alert("请输入账号或者密码！！")
					}
				  	var arr = JSON.parse(localStorage.getItem("myobj"))||[]
				  	var _this = this
				  	arr.forEach(function(ele,idx){
				  		if(ele.id == _this.id){
				  			if(ele.pws == _this.pws){
//				  				localStorage.setItem("loginData",JSON.stringify(loginData))
				  				_this.$router.push("/mine")
				  			}else{
				  				alert("账号或者密码错误")
				  			}
				  		}
				  	})
				}
			
			}
	}
</script>

<style scoped>
	#header{
		height:0.97rem;
		width:100%;
		background:#e6e6e6;
		text-align:center;
		line-height:0.97rem;
		font-size:0.4rem;
	}
	.up{
		float:left;
		width:0.6rem;
		margin-left:0.4rem;
		margin-top:0.2rem ;
	}
	.logo{
		width: 100%;
		height: 2.06rem;
		margin-top: 1rem;
		display: flex;
		justify-content: center;
	}
	.logo img{
		width: 1.88rem;
		height: 1.06rem;
		
	}
	.login_form{
		width: 7.5rem;
		
	}
	.username{
		width:6.74rem;
		margin: 0 auto;
		border-bottom: 1px solid #afafaf;
		overflow: hidden;
		
	}
	.user_img,.pass_img{
		width: 0.9rem;
		height: 0.8rem;
		padding: 0.15rem 0;	
		line-height: 0.8rem;
		text-align: center;
		float: left;


	}
	.user_img img,.pass_img img{
		width: 0.5rem;
		height: 0.5rem;

		
	}
	.username input,.password input{
		height: 0.8rem;
		width: 4rem;
		font-size: 16px;
		border:none;
		outline: none;
		line-height: 0.8rem;
		float: left;
		placeholder-color:#ccc;
	}
	.password{
		margin: 0 auto;
		width:6.74rem;
		height: 0.8rem;
		margin-top: 0.4rem;
		border-bottom: 1px solid #afafaf;
		overflow: hidden;
	}
	.forget{
		margin: 0 auto;
		width:6.74rem;
		color:#eb8312;
		text-align: right;
		margin-top:0.33rem;
		margin-bottom:0.8rem;
	}
	.btn{
		margin:0 0.4rem;
		width:6.74rem;
		height:0.9rem;
		border:none;
		background:#f08300;
		color: #FFFFFF;
		font-size:0.3rem;
		margin-bottom:3.52rem;
	}
	.register{
		display: flex;
		justify-content: center;
	}
	.btn_reg{
	   width: 1.6rem;
		height: .5rem;
		border:1px solid #f08300;
		color: #f08300;
		border-radius: 5px;
		background: #fff;
		outline: none;
		
	}
</style>