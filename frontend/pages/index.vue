<template>
  <div>
    <TheHero />
    <TheProducts v-if="products" :products="products" />
  </div>
</template>

<script>
import TheProducts from "@/components/TheProducts";
export default {
  name: "IndexPage",
  components: [TheProducts],
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    this.getproducts();
  },
  methods: {
    async getproducts() {
      const data = await this.$axios.$get("/api/v1/latest-products/");
      this.products = data;
    },
  },
};
</script>
