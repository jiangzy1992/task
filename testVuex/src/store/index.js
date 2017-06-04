import Vue from 'Vue'
import Vuex from 'Vuex'
import mutations from '/mutations'
import action from '/action'


Vue.use(Vuex);


export default new Vuex.store({
	state,
	action,
	mutations
})


