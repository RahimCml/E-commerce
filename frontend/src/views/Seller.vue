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
    await this.updateseller()
  },
  methods: {
    ...mapActions(['fetchSeller']),
    async updateseller () {
      this.seller = await this.fetchSeller(this.$route.params.sellerId)
    }
  },
}
</script>

<template lang="pug">
  .seller
</template>
