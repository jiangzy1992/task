<template>
	<router-view></router-view>
</template>


<script>
import cart from '../components/Cart.vue'
import address from '../components/Address.vue'
import del from '../components/Delete.vue'

export default {
	components: { 
		cart,
		address,
		del
	}
}
</script>


