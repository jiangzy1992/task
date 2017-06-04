import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/components/Cart'
import address from '@/components/Address'

Vue.use(Router)

export default new Router({
  routes: [{
	    path: '/',
	    component: Cart
    }, {
		path: '/address',
		component: address
    }

  ]
})
