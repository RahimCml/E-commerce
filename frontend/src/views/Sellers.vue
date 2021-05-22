
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
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchSellers'])
  }
}
</script>

<template lang="pug">
  .home
    h1 Sellers
    p(v-if="isLoading") Please wait...
    div(v-else)
      p There are {{sellers.length}} sellers for sale.
      ol
        li(v-for="seller in sellers")
          a(:href="`/sellers/${seller._id}`") {{ seller.name }}
</template>