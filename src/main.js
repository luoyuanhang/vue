// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'

import './common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */

//定义路由
const routes = [
  {path:'/',redirect:'/goods'},
  {path:'/goods',component:goods},
  {path:'/seller',component:seller},
  {path:'/ratings',component:ratings},
];
//创建router实例
const router = new VueRouter({
  routes,
  linkActiveClass:'active'
});

//创基和挂载在跟实例
new Vue({
  router,
  el:"#app",
  render:(h) => h(App)
})



/*
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
*/
