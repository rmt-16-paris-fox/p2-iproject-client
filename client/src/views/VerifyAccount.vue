<template>
  <div>Verify Account</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'VerifyAccount',
  created () {
    this.$store.dispatch('VerifyAccount', this.$route.params.verifyCode)
      .then(() => {
        this.$router.push('/login')
      })
      .catch((err) => {
        this.$router.push('/login')
        Swal.fire({
          icon: 'error',
          title: err,
          showConfirmButton: false,
          timer: 2000,
          allowOutsideClick: false
        })
      })
  }
}
</script>

<style>

</style>
