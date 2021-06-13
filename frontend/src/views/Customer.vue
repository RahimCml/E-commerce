<script>
import { mapActions } from 'vuex'
export default {
  name: 'CustomerView',
  data () {
    return {
      isLoading: true,
      customer: {}
    }
  },
  async created () {
    await this.updateCustomer()
    this.isLoading = false
  },
  methods: {
    ...mapActions(['fetchCustomer']),
    async updateCustomer () {
      this.customer = await this.fetchCustomer(this.$route.params.customerId)
    }
  },
}
</script>

<template lang="pug">
  .customer
    p(v-if="isLoading") Please wait...
    div(v-else)
      ol Customer Detail
        li Name: {{ customer.name || 'No Detail' }},
        li Order: {{ customer.orders }},
        li address: {{ customer.address }},
        li e-mail address: {{customer.email}}
</template>
