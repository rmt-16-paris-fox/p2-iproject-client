<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" @click="previousPage">Previous</a>
      </li>
      <li
        class="page-item"
        v-for="(currentPage, index) in range.end"
        :key="index"
        @click="changePage(currentPage)"
      >
        <a class="page-link" href="#">{{ currentPage }}</a>
      </li>
      <li class="page-item"><a class="page-link" @click="nextPage">Next</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SearchPagination",
  props: ["totalPage", "currentPage", "query"],
  methods: {
    pageRange(page, pageCount) {
      var start = page - 2;
      var end = page + 2;
      if (end > pageCount) {
        start -= end - pageCount;
        end = pageCount;
      }
      if (start <= 0) {
        end += (start - 1) * -1;
        start = 1;
      }
      end = end > pageCount ? pageCount : end;
      return {
        start: start,
        end: end,
      };
    },
    changePage: function (page) {
      this.$store.dispatch("runSearch", { search: this.query, page });
    },
    nextPage: function () {
      this.$store.dispatch("runSearch", {
        search: this.query,
        page: this.currentPage + 1,
      });
    },
    previousPage: function () {
      this.$store.dispatch("runSearch", {
        search: this.query,
        page: this.currentPage - 1,
      });
    },
  },
  computed: {
    range: function () {
      return this.pageRange(this.currentPage, this.totalPage);
    },
    start: function () {
      return this.range.start;
    },
  },
};
</script>

<style></style>
