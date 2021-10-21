<template>
  <div>
    <h1>This is Review page</h1>
    <div id="nav">
      <a class="text-success">FoodPedia</a> |
      <a>Reviewpage</a>
    </div>
    <Form :code="code" :image="image" :name="name" :desc="desc"></Form>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "Review",
  data: function () {
    return {
      //   foodCode: "",
    };
  },
  components: {
    Form,
  },
  computed: {
    code: function () {
      return this.$route.params.code;
    },
    image: function () {
      return this.$route.params.image;
    },
    name: function () {
      return this.$route.params.name;
    },
    desc: function () {
      return this.$route.params.desc;
    },
  },
};
</script>

<style></style>
