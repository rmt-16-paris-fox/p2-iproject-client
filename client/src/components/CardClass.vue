<template>
<div class="col mb-5">
  <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img @click.prevent="toDetailPage"
      :src="DataClass.imageUrl"
      class="img-fluid"
    />
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.5);"></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{DataClass.title}}</h5>
    <p class="card-text">
      Category: {{DataClass.category}}
    </p>
    <p class="card-text">
      Price: {{formatPrice}}
    </p>
    <a @click.prevent="toDetailPage" class="btn btn-primary me-2">Detail</a>
    <a v-if="isLogin" @click.prevent="addClass" class="btn btn-primary">Buy Class</a>
  </div>
</div>
 </div>
</template>

<script>
import { swalSuccess, swalError } from '../apis/swal'

export default {
  name: 'CardClass',
  data () {
    return {
      price: ''
    }
  },
  props: ['DataClass'],
  methods: {
    toDetailPage () {
      this.$router.push(`/detail/${this.DataClass.id}`)
    },
    addClass () {
      this.$store.dispatch('Payment')
        .then((data) => {
          window.snap.pay(data.transaction.token)
          //   onSuccess: function (result) {
          //     /* You may add your own implementation here */
          //     if (result.status_message === 'Success, Credit card transaction is successful') {
          //       console.log('masuk sini')
          //       this.$store.dispatch('AddClass', this.DataClass.id)
          //         .then(() => {
          //           this.$router.push('/myclass')
          //         })
          //     }
          //   },
          //   onPending: function (result) {
          //     /* You may add your own implementation here */
          //     console.log(result)
          //   },
          //   onError: function (result) {
          //     /* You may add your own implementation here */
          //     console.log(result)
          //   },
          //   onClose: function () {
          //     /* You may add your own implementation here */
          //     console.log('masuk sini')
          //   }
          // })
          this.$store.dispatch('AddClass', this.DataClass.id)
            .then(() => {
              swalSuccess('Berhasil membeli kelas. silahkan cek email.')
            })
        })
        .catch((err) => {
          swalError(err.response.data.message)
        })
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    formatPrice () {
      return Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
      }).format(this.DataClass.price)
    }
  }
}
</script>

<style>

</style>
