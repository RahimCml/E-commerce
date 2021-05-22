<script>
import { mapActions } from 'vuex'
export default {
  name: 'Customers',
  data () {
    return {
      isLoading: true,
      customers: []
    }
  },
  async created () {
    this.customers = await this.fetchCustomers()
  },
  methods: {
    ...mapActions(['fetchCustomers'])
  }
}
</script>

<template lang="pug">
  .home
    h1 customers
</template>