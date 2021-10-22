const Swal = require('sweetalert2')

const success = (message) => {
  Swal.fire({
    icon: 'success',
    title: 'Suceess...',
    text: message,
    showConfirmButton: false,
    timer: 1500
  })
}

const error = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message
  })
}

module.exports = { success, error }
