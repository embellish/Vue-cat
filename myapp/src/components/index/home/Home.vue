<template>
	<div>
		<!--<div class="banner">
				<ul>
					<li v-for="carousels in carousel">
						<img :src="carousels.src"/>
					</li>
				</ul>
		</div>-->
	<div>  
        <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
             <swiper-slide><img src="../../../../static/assets/images/banner.png"></swiper-slide>
			 <swiper-slide><img src="../../../../static/assets/images/banner1.png"></swiper-slide>
			 <swiper-slide><img src="../../../../static/assets/images/banner2.png"></swiper-slide>
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
    </div>
		<div class="title">{{msg}}</div>
		<div class="contre">		
			<ul class="ul_contre">
					<li v-for="img in imgs">
						<img :src="img.src"/>
						<span>{{img.name}}</span>
					</li>
			</ul>		
		</div>
	
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		    components: {  
            swiper,  
            swiperSlide  
        }, 
		data(){	
			return {
				msg:"宝胜只能后视镜",
				imgs:
				[
					{src:"../../../../static/assets/images/1.png",name:'视频影像'},
					{src:"../../../../static/assets/images/2.png",name:'车辆定位'},
					{src:"../../../../static/assets/images/3.png",name:'远程监控'},
					{src:"../../../../static/assets/images/4.png",name:'异动报警'},
					{src:"../../../../static/assets/images/5.png",name:'远程设置'},
					{src:"../../../../static/assets/images/6.png",name:'实时预览'},
					{src:"../../../../static/assets/images/3.png",name:'关于'}
				],
				carousel:
				[
				 	{src:"../../../../static/assets/images/banner.png"},
				 	{src:"../../../../static/assets/images/banner1.png"},
				 	{src:"../../../../static/assets/images/banner2.png"}
				],
				  swiperOption:{
		          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
		          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
		          notNextTick: true,
		          // swiper configs 所有的配置同swiper官方api配置
		          autoplay: 3000,
		          //direction : 'vertical',
		          grabCursor : true,
		          setWrapperSize :true,
		          autoHeight: true,
		          pagination : '.swiper-pagination',
		          paginationClickable :true,
		          observeParents:true,
		          // if you need use plugins in the swiper, you can config in here like this
		          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
		          debugger: true,
		          // swiper callbacks
		          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
		          onTransitionStart(swiper){
		            console.log(swiper)
	          		}
				}
			}				
		},
		mounted(){
			console.log(this.imgs)
		}
	}
</script>

<style scoped>
	/*#app{
		width:100%;
		height:100%;
		background:#ededed;
	}*/
	 .swiper-slide img{
	 	height: 3.8rem;
		width: 7.5rem;
		display: block;
	 }
	 #box .banner img{
	 	width: 100%;
	 }
	 #box .banner{
	 	height: 3.8rem;
		width: 7.5rem;
		box-sizing: border-box;
		margin:0;
		padding:0;
		overflow: hidden;
	 }
	  /*#box .banner li{
	  	position:absolute;
	  }*/
	 #box .title{
	 	height:0.82rem;
	 	width:100%;
	 	background:#ff8b00;
	 	color:#fff;
	 	text-align:center; 
	 	line-height:0.82rem;
	 	font-size:0.3rem;
	 }
	 #box .ul_contre{
		display: flex;
		flex-wrap:wrap;	   
	 }
	 #box .contre li{
	 	width:2.5rem!important;
	 	height: 2rem;
	 	display: flex;
	 	flex-direction: column;
	 	align-content: center;
	 	justify-content: center;
	 	align-items: center;
	 	margin:0.24rem 0;
	 }
	 	 #box .contre li img{
	 	 	width: 1.25rem;
	 	 	margin:0.24rem 0;	
	 	 }
	 	 ro-lin-act .icon{
	 	 	background: ;
	 	 }
</style>