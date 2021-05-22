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
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchCustomers'])
  }
}
</script>

<template lang="pug">
  .home
    h1 customers
    p(v-if="isLoading") Please wait...
    div(v-else)
      p There are {{customers.length}} customers for sale.

      ol
        li(v-for="customer in customers")
          a(:href="`/customers/${customer._id}`") {{ customer.name }}
</template>