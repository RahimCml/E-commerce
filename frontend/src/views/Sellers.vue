
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Sellers',
  data () {
    return {
      isLoading: true,
      sellers: []
    }
  },
  async created () {
    this.sellers = await this.fetchSellers()
  },
  methods: {
    ...mapActions(['fetchSellers'])
  }
}
</script>

<template lang="pug">
  .home
    h1 Sellers
</template>