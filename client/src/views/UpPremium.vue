<template>
  <div class="container mt-5">
    <div v-if="isPremium">
      <h2>You are already premium User</h2>
    </div>
    <div v-else>
      <h2>Upgrade to Permium</h2>
      <hr />
      <div class="row">
        <div class="col-4">
          <div class="card p-5 c0812">
            <h2>Free Ads</h2>
            <p>Hide annoying ads and load pages even faster.</p>

            <p>
              Actually never mind... there is no ads to begin with, and load
              pages gonna keep slow
            </p>
          </div>
        </div>

        <div class="col-4">
          <div class="card p-5 c0812">
            <h2>Unlimited Access</h2>
            <p>Get Unlimited access to every feature of this website.</p>

            <p>
              what feature? yep scam....
            </p>
          </div>
        </div>

        <div class="col-4">
          <div class="card p-5 c0812">
            <h2>Unlimited daily test Quota</h2>
            <p>Can take kanji test more than 2</p>

            <p>
              this one real probably
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div class="container">
        <PayPal
          amount="4.99"
          currency="USD"
          :client="credentials"
          env="sandbox"
          :items="myItems"
          :experience="experienceOptions"
          :button-style="myStyle"
          @payment-completed="onCompleted"
          @payment-cancelled="onCanceled"
        >
        </PayPal>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import PayPal from "vue-paypal-checkout";
import axios from "../apis/axios";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isPremium"]),
  },
  components: {
    PayPal,
  },
  data() {
    return {
      credentials: {
        sandbox:
          "AWllKTZHkFrDfXeV5xZ-nVEXC-ZyCO8naMDyEEY7IPQgDqpjdUTLwgVdoE5aDXYWol8h9gB51Af6gkRC", // should be moved to dotenv
        // production: '<production client id>'
      },
      myItems: [
        {
          name: " month Premium plan",
          description: "Upgrade to premium access",
          quantity: "1",
          price: "4.99",
          currency: "USD",
        },
      ],
      experienceOptions: {
        input_fields: {
          no_shipping: 1,
        },
      },
      myStyle: {
        label: "checkout",
        size: "responsive",
        shape: "rect",
        color: "blue",
      },
    };
  },
  methods: {
    async premiumRequest() {},
    onCompleted(result) {
      axios({
        url: "/premium",
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
        data: {
          paypal: result,
        },
      })
        .then((res) => {
          console.log(res);

          Swal.fire("payment successfull");
          this.$store.commit("SET_PREMIUM", true);
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("paypal result:", result);
    },
    onCanceled() {
      Swal.fire("payment canceled");
    },
  },
};
</script>

<style>
.c0812 {
  height: 300px;
}
</style>
