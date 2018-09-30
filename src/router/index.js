import Vue from 'vue'
import Router from 'vue-router'

import Goods from '../components/Goods/Goods'
import Ratings from '../components/Ratings/Ratings'
import Seller from '../components/Seller/Seller'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // 選中後的類名，預設是 .router-link-active
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ]
})
