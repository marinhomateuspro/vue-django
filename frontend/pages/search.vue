<template>
  <div>
    <h1 class="title text-center">Search term: {{ query }}</h1>
    <TheProducts v-if="products" :products="products" />
  </div>
</template>

<script>
import TheProducts from "@/components/TheProducts";
export default {
  name: "SearchPage",
  components: [TheProducts],
  data() {
    return {
      products: null,
      query: "",
    };
  },
  mounted() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);

    if (params.get("query")) {
      this.query = params.get("query");
    }

    this.getproducts();
  },
  methods: {
    async getproducts() {
      const data = await this.$axios.$post("/api/v1/products/search/", {
        query: this.query,
      });
      this.products = data;
    },
  },
};
</script>
