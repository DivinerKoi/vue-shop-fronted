import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './view/login.vue'

Vue.use(VueRouter)


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export default new VueRouter({
 routes: [
   { path: '/', redirect: '/login' },
   { path: '/login', component: login }
 ]
})