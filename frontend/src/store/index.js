import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const Mutations = {
	INCREMENT: "INCREMENT",
	DECREMENT: "DECREMENT",
};

export default new Vuex.Store({
	state: {
		countAbout: 0
	},
	mutations: {
		[Mutations.INCREMENT](state, type) {
			type === "countHome" ? 0 : state.countAbout++;
		},
		[Mutations.DECREMENT](state, type) {
			if (state[type] === 0) return;

			type === "countHome" ? 0 : state.countAbout--;
		},
	},
	actions: {
		increment({ commit }, type) {
			commit(Mutations.INCREMENT, type);
		},
		decrement({ commit }, type) {
			commit(Mutations.DECREMENT, type);
		},
	},
});
