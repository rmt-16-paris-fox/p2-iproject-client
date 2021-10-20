<template>
  <div class="container" style="height: 80vh">
    <h1 class="mt-4">Add Transaction</h1>
    <br />
    <br />
    <p>Please input product and category</p>
    <div class="row justify-content-center">
      <form
        @submit.prevent="changePage"
        class="w-50 p-5"
        style="
          background-color: #3c415c;
          border-radius: 20px;
          height: 350px;
          box-shadow: 8px 19px 57px -8px rgba(0, 0, 0, 0.59);
        "
      >
        <!-- <h1 class="text-center mb-3 text-light">Transaction Form</h1> -->
        <div class="mb-3">
          <label class="form-label text-light">Product</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Category</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
          </select>
        </div>
        <input type="hidden" />
        <button
          style="background-color: #b4a5a5"
          class="btn mt-3"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTransaction',
}
</script>

<style></style>
