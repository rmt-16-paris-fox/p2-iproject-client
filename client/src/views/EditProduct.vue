<template>
  <div class="container" style="height: 80vh">
    <h1 class="mt-4">Edit Product</h1>
    <br />
    <div class="row justify-content-center">
      <form
        @submit.prevent="submitEditProduct"
        class="w-50 p-5"
        style="
          background-color: #3c415c;
          border-radius: 20px;
          height: 700px;
          box-shadow: 8px 19px 57px -8px rgba(0, 0, 0, 0.59);
        "
      >
        <div class="mb-3">
          <label class="form-label text-light">Name</label>
          <input v-model="name" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Price</label>
          <input v-model="price" type="number" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Image</label>
          <input @change="getImage($event)" type="file" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Stock</label>
          <input v-model="stock" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Product Category</label>
          <select
            v-model="categoryId"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected disabled>Open this select menu</option>
            <option
              v-for="listCategorie in listCategories"
              :key="listCategorie.id"
              :value="listCategorie.id"
            >
              {{ listCategorie.name }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-light">Product Brand</label>
          <select
            v-model="brandId"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected disabled>Open this select menu</option>
            <option
              v-for="listBrand in listBrands"
              :key="listBrand.id"
              :value="listBrand.id"
            >
              {{ listBrand.name }}
            </option>
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
  name: 'EditProduct',
  data() {
    return {
      name: '',
      price: '',
      imageUrl: '',
      stock: '',
      categoryId: '',
      brandId: '',
    }
  },
}
</script>

<style></style>
