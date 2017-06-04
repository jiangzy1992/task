var vm = new Vue({
	el: "#app",
	data: {
		productList:[],
	},
	filters: {
		
	},
	mounted: function () {
		this.cartView();
	},
	methods: {
		cartView: function () {
			var _this = this;
			this.$http.get("data/cart.json").then(function (res) {
				// _this.productList = res.result.list
			})
		}
	}
})