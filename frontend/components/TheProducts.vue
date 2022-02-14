<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="font-weight-thin text-h4 my-4">Products</h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="3" sm="3" v-for="product in products" :key="product.name">
          <v-card :to="product.get_absolute_url">
            <v-img
              class="white--text white align-end"
              height="200px"
              :src="product.get_image"
              contain
            ></v-img>
            <v-card-title class="font-weight-thin text-h6 mb-4 justify-center">
              {{ product.name }}
            </v-card-title>
            <v-card-subtitle class="ma-auto">
              ${{ product.price }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["products"],
};
</script>
