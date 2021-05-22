<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductView',
  data () {
    return {
      isLoading: true,
      product: {}
    }
  },
  async created () {
    await this.updateProduct()
  },
  methods: {
    ...mapActions(['fetchProduct']),
    async updateProduct () {
      this.product = await this.fetchProduct(this.$route.params.productId)
    }
  },
}
</script>

<template lang="pug">
  .product
</template>
