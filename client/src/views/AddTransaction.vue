<template>
  <div class="container" style="height: 80vh">
    <h1 class="mt-4">Add Transaction</h1>
    <br />
    <br />
    <div class="row justify-content-center">
      <form
        @submit.prevent="addTransactions"
        class="w-50 p-5"
        style="
          background-color: #3c415c;
          border-radius: 20px;
          height: 400px;
          box-shadow: 8px 19px 57px -8px rgba(0, 0, 0, 0.59);
        "
      >
        <h2 class="text-light mb-3">Please input quantity product</h2>
        <div class="form-floating mb-3">
          <input
            v-model="productId"
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">ID Product</label>
        </div>
        <div class="form-floating mb-3">
          <input
            v-model="totalAmount"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Total Amount</label>
        </div>
        <div class="form-floating mb-3">
          <input
            v-model="totalQuantity"
            type="number"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Total Quantity</label>
        </div>
        <input type="hidden" />
        <button
          style="background-color: #b4a5a5"
          class="btn mt-3"
          type="submit"
        >
          Submit
        </button>
        <button
          @click.prevent="back"
          style="background-color: #b4a5a5"
          class="btn mt-3 mx-2"
          type="submit"
        >
          Back
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'AddTransaction',
  data() {
    return {
      productId: '',
      totalAmount: '',
      totalQuantity: '',
    }
  },
  methods: {
    back() {
      this.$router.push('/products')
    },
    addTransactions() {
      const payload = {
        userId: this.$store.state.userId,
        productId: this.productId,
        totalAmount: this.totalAmount,
        totalQuantity: this.totalQuantity,
      }
      this.$store
        .dispatch('addTransaction', payload)
        .then((data) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 2500,
          })
          this.$router.push('/products')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    formatePrice() {
      return Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(this.$store.state.products.price)
    },
  },
  created() {
    this.productId = this.$store.state.products.id
    this.totalAmount = this.formatePrice
  },
}
</script>

<style></style>
