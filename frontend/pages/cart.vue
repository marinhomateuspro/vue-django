<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="cart.items"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small color="yellow" @click="decrementQuantity(item)">
          mdi-minus
        </v-icon>
        <v-icon
          small
          class="ml-2"
          color="green"
          @click="incrementQuantity(item)"
        >
          mdi-plus
        </v-icon>
        <v-icon small class="ml-6" color="red" @click="removeFromCart(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:item.total="{ item }">
        <v-chip dark> ${{ item.quantity * item.product.price }}.00 </v-chip>
      </template>
      <template v-slot:footer> </template>
    </v-data-table>
  </div>
</template>

<script>
import TheCart from "@/components/TheCart";
export default {
  components: [TheCart],
  data() {
    return {
      cart: { items: [] },
      headers: [
        {
          text: "Product",
          align: "start",
          value: "product.name",
        },
        { text: "Price", value: "product.price" },
        { text: "Quantity", value: "quantity" },
        { text: "Actions", value: "actions" },
        { text: "Total", value: "total", sortable: false },
      ],
    };
  },
  mounted() {
    this.cart = this.$store.state.cart;
    console.log(this.cart);
  },
  methods: {
    decrementQuantity(item) {
      this.$store.commit("decrementQuantity", item);
    },
    incrementQuantity(item) {
      this.$store.commit("incrementQuantity", item);
    },
    removeFromCart(item) {
      this.$store.commit("removeFromCart", item);
    },
  },
};
</script>
