<template>
  <div>
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
      const categorySlug = this.$route.params.category_slug;
      const data = await this.$axios.$get(`/api/v1/products/${categorySlug}/`);
      this.products = data.products;
    },
  },
};
</script>
