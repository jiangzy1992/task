<script>
	const Counter = {
	  template: '<div>{{ count }}</div>',
	  computed: {
	    count () {
	      return this.$store.state.count
	    }
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
