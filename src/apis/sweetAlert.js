/* eslint-disable */
import Swal from "sweetalert2";

function swalSuccess(title, text) {
  const data = {
    title,
    text,
    icon: "success"
  };

  Swal.fire(data);
}

function swalError(title, text) {
  const data = {
    title,
    text,
    icon: "error"
  };

  Swal.fire(data);
}

function swalLoading(data) {
  Swal.fire({
    title:
      '<i class="fas fa-cookie-bite fa-5x fa-spin" style="color: #C36A2D">',
    html: "Loading, please wait ...",
    showConfirmButton: false,
    allowOutsideClick: false,
    didOpen: () => {
      data;
    }
  });
}

export { swalSuccess, swalError, swalLoading };
