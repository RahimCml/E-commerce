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
</template>
