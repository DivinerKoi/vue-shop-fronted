import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueRouter from 'vue-router'
// import login from './view/login.vue'
import router from './router.js'
//导入全局样式
import './assets/css/global.css'


// Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false

// const routes = [
//   { path: '/', redirect: '/login' },
//   { path: '/login', component: login }
// ]

// // 3. 创建 router 实例，然后传 `routes` 配置
// // 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   routes // (缩写) 相当于 routes: routes
// })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
