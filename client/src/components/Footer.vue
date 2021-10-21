<template>
  <footer class="b-brown position-relative">
    <div class="background-footer pill-9">
      <img
        src="../assets/background/pill-7.svg"
        alt="background"
        class="position-absolute background-footer pil-9"
      />
    </div>

    <div class="footer-content container d-block d-lg-flex row m-auto">
      <div class="image-footer-content col-12 col-lg-6 z-99">
        <img
          src="../assets/background/back-footer.svg"
          class="w-100"
          alt="image footer"
        />
      </div>

      <div class="contact col-12 col-lg-6 align-self-lg-end">
        <h3
          class="
            txt-footer-content
            text-white
            f-s-48
            fs-500-24
            font-weight-bold
            w-100
            col-12 col-lg-10
            m-auto
          "
        >
          Masih Kepo? <br />
          Hubungi Kami
        </h3>
        <form class="pt-5 col-12 col-lg-10 m-auto">
          <div class="form-row">
            <div class="form-group col-12 col-lg-6">
              <input
                v-model="payload.name"
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="Nama"
              />
            </div>
            <div class="form-group col-12 col-lg-6">
              <input
                v-model="payload.email"
                type="Email"
                class="form-control"
                id="inputPassword4"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group">
            <input
              v-model="payload.perusahaan"
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Perusahaan"
            />
          </div>
          <div class="form-group">
            <input
              v-model="payload.topik"
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Topik"
            />
          </div>
          <div class="form-group">
            <textarea
              v-model="payload.pesan"
              class="form-control"
              placeholder="Tuliskan pesan"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <div class="btn-submit-group d-flex justify-content-end">
            <button
              @click.prevent="contact"
              type="submit"
              class="btn btn-submit b-yellow c-brown font-weight-bold"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>

    <FooterBottom></FooterBottom>
  </footer>
</template>

<script>
import FooterBottom from "@/components/FooterBottom.vue";
import Swal from "sweetalert2";
export default {
  name: "Footer",
  components: {
    FooterBottom,
  },
  data() {
    return {
      payload: {
        name: "",
        email: "",
        perusahaan: "",
        topik: "",
        pesan: "",
      },
    };
  },
  methods: {
    contact() {
      this.$store
        .dispatch("contact", this.payload)
        .then((response) => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login success!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
  },
};
</script>

<style>
</style>
