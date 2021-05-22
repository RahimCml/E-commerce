<script>
import { mapActions } from 'vuex'
export default {
  name: 'Products',
  data () {
    return {
      isLoading: true,
      products: []
    }
  },
  async created () {
    this.products = await this.fetchProducts()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchProducts'])
  }
}
</script>

<template lang="pug">
  .home
    h1 products
    p(v-if="isLoading") Please wait...
    div(v-else)
      p There are {{products.length}} products for sale.
      ol
        li(v-for="product in products")
          a(:href="`/products/${product._id}`") {{ product.name }}
</template>