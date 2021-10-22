<template>
  <div class="container-fluid d-flex mt-5" style="height: 100vh">
    <div class="row justify-content-center">
      <div class="col-6">
        <form @submit.prevent="fetchProduct" class="d-flex mb-5">
          <input
            v-model="name"
            class="form-control me-2"
            type="search"
            placeholder="Search product by name"
            aria-label="Search"
          />
          <button
            class="btn text-light"
            style="background-color: #3c415c"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div class="col-12 d-flex flex-wrap justify-content-center">
        <ProductCard
          @deleteSuccess="deleteSuccess"
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></ProductCard>
      </div>
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center align-items-center">
          <li class="page-item">
            <a
              @click.prevent="minusPage"
              class="page-link"
              href="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li @click="pagination(1)" class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li @click="pagination(2)" class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li @click="pagination(3)" class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a
              @click.prevent="plusPage"
              :aria-disabled="this.page"
              class="page-link"
              href="#"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <HFooter></HFooter>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'Product',
  data() {
    return {
      products: [],
      name: '',
      page: 1,
      lengthData: 0,
    }
  },
  methods: {
    fetchProduct() {
      const payload = {
        page: this.page,
        name: this.name,
      }
      this.$store
        .dispatch('fetchProduct', payload)
        .then((data) => {
          this.products = data
          this.lengthData = data.length
        })
        .catch((err) => {
          console.log(err)
        })
    },
    pagination(page) {
      this.page = page
      const payload = {
        page: this.page,
      }
      this.$store
        .dispatch('fetchProduct', payload)
        .then((data) => {
          this.products = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteSuccess() {
      this.$store
        .dispatch('fetchProduct')
        .then((data) => {
          this.products = data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    plusPage() {
      if (this.lengthData >= 9) {
        this.page += 1
      } else {
        this.page -= 1
      }
      this.fetchProduct()
    },
    minusPage() {
      if (this.page > 1) {
        this.page -= 1
      }
      this.fetchProduct()
    },
  },
  components: {
    ProductCard,
    HFooter,
  },
  created() {
    this.page = 1
    this.$store
      .dispatch('fetchProduct', this.page)
      .then((data) => {
        this.products = data
      })
      .catch((err) => {
        console.log(err)
      })

    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_IS_LOGIN', true)
    } else {
      this.$store.commit('SET_IS_LOGIN', false)
    }
  },
}
</script>

<style>
li .page-link {
  background-color: #3c415c;
  color: white;
}
</style>
