import Vue from 'vue'
import VueRouter from 'vue-router'
import TGuard from './services/middleware'
Vue.use(VueRouter)


import Signup from './components/Signup.vue'
import Signin from './components/Signin.vue'
import Home from './components/Home.vue'
import DashBoard from './components/DashBoard.vue'

const routes = [
    { path:"/", component:Home },
    { path:"/signin", component:Signin, beforeEnter: TGuard.guest },
    { path:"/signup", component:Signup },
    { path:"/me", component:DashBoard }
]

export default new VueRouter({mode: 'history', routes})