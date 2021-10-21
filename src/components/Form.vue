<template>
  <div>
    <form @submit.prevent="handleEdit">
      <div class="form-group">
        <label for="exampleFormControlInput1">Food Code</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="food code"
          v-model="foodcode"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Product Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="product name"
          v-model="productname"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Image</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="image"
          v-model="imageurl"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect2">Description</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="description"
          v-model="description"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1"
          >Review
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-mic-fill"
            viewBox="0 0 16 16"
            @click="voiceSearch"
          >
            <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
            <path
              d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
            /></svg
        ></label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="review"
        ></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-outline-primary">
          submit review
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "@/apis/server.js";
import Swal from "sweetalert2";
export default {
  name: "Form",
  data: function () {
    return {
      foodcode: "",
      productname: "",
      imageurl: "",
      description: "",
      review: "",
    };
  },
  props: ["code", "image", "name", "desc"],
  methods: {
    handleEdit: function () {
      axios({
        method: "POST",
        url: "/review",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          foodCode: this.foodcode,
          productName: this.productname,
          image: this.imageurl,
          description: this.description,
          review: this.review,
        },
      })
        .then(({ data }) => {
          console.log(data);
          Swal.fire(`Review is updated`);
          this.$router.push("/");
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
    voiceSearch: function () {
      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      window.SpeechGrammarList =
        window.SpeechGrammarList || window.webkitSpeechGrammarList;
      window.SpeechRecognitionEvent =
        window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
      // const texts = document.getElementsByClassName("form-control");
      const recognition = new window.SpeechRecognition();
      recognition.interimResults = true;
      let p = document.createElement("p");
      recognition.start();
      recognition.addEventListener("result", (e) => {
        const text = Array.from(e.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        p.innerText = text;
        // this.review = text;
        if (e.results[0].isFinal) {
          p = document.createElement("p");
          this.review += text;
        }
        // if (this.voiceSearch) {
        //   recognition.end();
        // }
      });
      recognition.addEventListener("end", () => {
        recognition.start();
        this.review + " ";
      });
    },
  },
  created: function () {
    this.foodcode = this.code;
    this.productname = this.name;
    this.imageurl = this.image;
    this.description = this.desc;
  },
};
</script>

<style></style>
