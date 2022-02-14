<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      headers: [
        {
          text: "Product",
          align: "start",
          value: "name",
        },
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity" },
        { text: "Total", value: "total" },
      ],
    };
  },
};
</script>
