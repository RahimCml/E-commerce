import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default new Vuex.Store({
	state: {
		countHome: 0,
		countAbout: 0
	},
	mutations: {
		[Mutations.INCREMENT](type, state) {
			type === "countHome" ? state.countHome++ : state.countAbout++;
		},
		[Mutations.INCREMENT](type, state) {
			if (state[type] === 0) return;

			type === "countHome" ? state.countHome-- : state.countAbout--;
		},
	},
	actions: {
	},
	modules: {},
});
