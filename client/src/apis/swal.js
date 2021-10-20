const Swal = require('sweetalert2')

const swalError = (message) => {
  Swal.fire({
    title: 'Error!',
    text: message,
    icon: 'error'
  })
}

const swalSuccess = (message) => {
  Swal.fire({
    title: 'Success!',
    text: message,
    icon: 'success'
  })
}

module.exports = { swalError, swalSuccess }
