import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login/Login';
import Index from '../components/index';
import Register from '../components/register/register';
	import Home from '../components/index/home/Home';
	import Find from '../components/index/find/Find';
	import Navigation from '../components/index/ navigation/Navigation.vue'
	import Mine from '@/components/index/Mine/mine'
Vue.use(Router)

export default new Router({
  routes: [
		  {
			    path:'/',
			    name:'index',
			    component:Index,
			    children:[
			    	{
				    	path:'/',
				    	name:'home',
				    	component:Home
			   		},
			    	{
			    		path:'/find',
			    		name:'find',
			    		component:Find
			    	},{
			    		path:'/navigation',
			    		name:'navigation',
			    		component:Navigation
			    	},
			    	{
			    		path:'/mine',
			    		name:'mine',
			    		component:Mine
			    	}
			    ]    
		   },
		   {
		   		path:"/login",
		   		name:"login",
		   		component:Login
		   },
		   {
		   		path:"/register",
		   		name:"register",
		   		component:Register		
		   }
  	]
})
