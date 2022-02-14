<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text white align-end"
      height="200px"
      :src="product.get_image"
      contain
    >
    </v-img>
    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-subtitle class="pb-0">{{ product.price }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ product.description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-row class="mx-auto">
        <v-col cols="4" md="4">
          <v-text-field dense v-model="quantity" type="number"> </v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-btn class="mx-4" fab dark small color="primary" @click="addToCart">
          <v-icon dark> mdi-cart </v-icon>
        </v-btn>
      </v-row>
    </v-card-actions>

    <v-snackbar shaped outlined color="success" v-model="snackbar">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text icon v-bind="attrs" @click="snackbar = false">
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      quantity: 1,
      product: {
        // name: "vapo",
        // description: "description",
        // price: 199.99,
      },
      snackbar: false,
      text: `Added to cart`,
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      const category_slug = this.$route.params.category_slug;
      const product_slug = this.$route.params.product_slug;
      const data = await this.$axios.$get(
        `/api/v1/products/${category_slug}/${product_slug}`
      );
      console.log(data);
      this.product = data;
      document.title = this.product.name + " | Jacketzs";
    },
    addToCart() {
      if (isNaN(this.quantity) || this.quantity < 1) {
        this.quantity = 1;
      }

      const item = {
        product: this.product,
        quantity: this.quantity,
      };

      this.$store.commit("addToCart", item);
      this.snackbar = true;
    },
  },
};
</script>
