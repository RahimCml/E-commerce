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
    this.isLoading = false
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
    p(v-if="isLoading") Please wait...
    div(v-else)
      ol product Detail
      li Product: {{ product.name || 'No Detail' }}, Seller: {{ product.seller }},  Price: {{ product.price }}, Size: {{product.size}}
</template>
