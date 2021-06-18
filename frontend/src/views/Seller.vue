<script>
import { mapActions } from 'vuex'

export default {
  name: 'SellerView',
  data () {
    return {
      isLoading: true,
      seller: {}
    }
  },
  async created () {
    await this.updateSeller()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchSeller']),
    async updateSeller () {
      this.seller = await this.fetchSeller(this.$route.params.sellerId)
    }
  }
}
</script>

<template lang="pug">
  .seller
    p(v-if="isLoading") Please wait...
    div(v-else)
      ol Seller Detail
        li Seller name: {{seller.name}}
        router-link(to='/products' tag='li') product name: {{ seller.product}}
</template>
