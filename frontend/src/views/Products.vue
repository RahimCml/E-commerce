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
  },
  methods: {
    ...mapActions(['fetchProducts'])
  }
}
</script>

<template lang="pug">
  .home
    h1 products
</template>