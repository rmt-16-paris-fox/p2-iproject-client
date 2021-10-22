<template>
  <div class="container mt-5">
    <h1 class="mb-5">History Transaction</h1>
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Date Transaction</th>
          <th>Items</th>
          <th>Total Quantity</th>
          <th>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ListTransaction',
  data() {
    return {
      listTransaction: [],
    }
  },
  created() {
    this.$store
      .dispatch('getTransaction')
      .then(() => {
        this.listTransaction = this.$store.state.transaction
        console.log(this.listTransaction)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

<style></style>
