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

export { swalSuccess, swalError };
