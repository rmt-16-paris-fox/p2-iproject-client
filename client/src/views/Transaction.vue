<template>
  <div class="container">
    <div class="row">
      <div class="col-2 my-2">
        <button type="button" class="btn btn-primary float-start">
          Add Transaction
        </button>
      </div>
    </div>
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
  name: 'Transaction',
}
</script>

<style></style>
