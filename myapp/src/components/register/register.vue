<template>
	<div id="register">
		<div class="header">
			 <router-link to="/login"><span class="left "><img src="../../../static/assets/images/back.png"  class=" back"></span></router-link> 注册
		</div>
		<form class="reg_form">
			<div class="username">
				<span class="user_img">
					<img src="../../../static/assets/images/login_user.png">
				</span>
				<input type="text" name="" placeholder="姓名" v-model="id">
			</div>
			<div class="sex">
				<span class="user_img">
					<img src="../../../static/assets/images/login_sex.png">
				</span>
				<label><input type="radio" name="six" checked><span style="margin-right:0.8rem">男</span></label>
				<label><input type="radio" name="six">女</label>
			</div>
			<div class="phone">
				<span class="user_img">
					<img src="../../../static/assets/images/login_phone_number.png">
				</span>
				<input type="password" name="" placeholder="密码" v-model="pws">
			</div>
			<div class="test">
				<span class="user_img">
					<img src="../../../static/assets/images/login_keyword.png">
				</span>
				<input type="text" name="" placeholder="验证码">
				<span class="_test">获取验证码</span>
			</div>
			<div class="btn">
				
				<router-link to="/login"><button class="btn_next" @click="next">下一步</button></router-link>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				id:"",
				pws:""
			}
		},
		methods:{
			next(){
				var regData = {
					id:this.id,
					pws:this.pws
				}
				if(this.id == ""){
					alert("账号不能为空")
				}else if(this.pws == ""){
					alert("密码不能为空！！")
				}
				var _myobj = JSON.parse(localStorage.getItem("myobj"))||[]
					_myobj.push(regData)					
				 	_myobj = JSON.stringify(_myobj)
				 	 localStorage.setItem("myobj",_myobj)
			}
		}
	}
</script>

<style>
	#register{
		width: 7.5rem;
		box-sizing: border-box;
	}
	.reg_form{
		width: 7.5rem;
		padding:0 0.4rem;
		
	}

	.left{
		float: left;
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 1rem;
	}
	.back{
		height: 0.6rem;
		width: 0.6rem;

	}
	.header{
		height: 1rem;
		width: 7.5rem;
		background: #e6e6e6;
		font-size: 18px;
		text-align: center;
		line-height: 1rem;
		padding: 0 0.4rem;
		margin-bottom: 0.3rem;
	}
	.username,.test{
		border-bottom: 1px solid #afafaf;
		overflow: hidden;
		margin-top: 0.4rem;
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
	.username input,.password input,.phone input,.test input{
		height: 0.8rem;
		width: 4rem;
		font-size: 16px;
		border:none;
		outline: none;
		line-height: 0.8rem;
		float: left;
		placeholder-color:#ccc;
		padding-left:0.2rem;
	}
	.sex,.phone{
		border-bottom: 1px solid #afafaf;
		overflow: hidden;
		margin-top: 0.4rem;
		line-height: 0.8rem;
		font-size: 16px;
	}
	.sex input {
		margin:	0 0.4rem;
	}
	._test {
		height: 0.56rem;
		border-radius: 5px;
		border:1px solid #f08300;
		color: #f08300 ;
		float: right;
		line-height: 0.56rem;
		width: 1.6rem;
		margin-top: .12rem;
		text-align: center;
	}
	.btn{
		margin-top: 0.9rem;
	}
	.btn_next{
		height: .9rem;
		width: 100%;
		text-align: center;
		background: #f08300;
		color: #fff;
		line-height: 0.9rem;
		font-size: 16px;
		outline: none;
		border:none;
	}
</style>