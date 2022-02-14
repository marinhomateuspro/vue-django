<template>
  <v-app dark>
    <v-app-bar dense fixed app>
      <v-card class="pa-1 transparent" flat :to="{ name: 'index' }">
        <v-toolbar-title v-text="title" />
      </v-card>
      <v-spacer />
      <v-spacer />
      <v-spacer />
      <v-spacer />
      <form method="get" action="/search">
        <input
          type="text"
          placeholder="What are you looking for?"
          v-model="query"
          class="pa-2 white--text"
          name="query"
        />
      </form>
      <v-spacer />

      <v-spacer />
      <v-btn depressed to="/summer"> Summer </v-btn>
      <v-btn depressed to="/winter"> Winter </v-btn>
      <v-btn color="blue-grey" class="ma-2 white--text"> Log in </v-btn>
      <v-btn color="indigo" class="ma-2 white--text" to="/cart">
        cart ({{ cartTotalLength }})
        <v-icon right dark> mdi-cart </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  head() {
    return {
      bodyAttrs: {
        class: "reset-body",
      },
    };
  },
  data() {
    return {
      cart: {
        items: [],
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Jacketzs",
      query: null,
    };
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
  mounted() {
    this.cart = this.$store.state.cart;
  },
  computed: {
    cartTotalLength() {
      let totalLength = 0;

      for (let i = 0; i < this.cart.items.length; i++) {
        totalLength += this.cart.items[i].quantity;
      }

      return totalLength;
    },
  },
};
</script>

<style>
.reset-body {
  margin: 0;
}
</style>
