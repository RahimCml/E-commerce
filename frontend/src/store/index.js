import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_PATH || 'http://localhost:3000'

Vue.use(Vuex)

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default new Vuex.Store({
  state: {
    countAbout: 0
  },
  mutations: {
    [Mutations.INCREMENT] (state, type) {
      type === 'countHome' ? state.countHome++ : state.countAbout++
    },
    [Mutations.DECREMENT] (state, type) {
      if (state[type] === 0) return

      type === 'countHome' ? state.countHome-- : state.countAbout--
    }
  },
  actions: {
    increment ({ commit }, type) {
      commit(Mutations.INCREMENT, type)
    },
    decrement ({ commit }, type) {
      commit(Mutations.DECREMENT, type)
    },
    async fetchProducts () {
      const request = await axios.get('/products')
      return request.data
    },
    async fetchCustomers () {
      const request = await axios.get('/customers')
      return request.data
    },
    async fetchSellers () {
      const request = await axios.get('/sellers')
      return request.data
    },
    async fetchProduct (ctx, productId) {
      const request = await axios.get(`/products/${productId}`)
      return request.data
    },
    async fetchCustomer (ctx, customerId) {
      const request = await axios.get(`/customers/${customerId}`)
      return request.data
    },
    async fetchSeller (ctx, sellerId) {
      const request = await axios.get(`/sellers/${sellerId}`)
      return request.data
    }
  }
})
