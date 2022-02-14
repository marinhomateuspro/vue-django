export const state = () => ({
  cart: {
    items: [],
  },
  isAuthenticated: false,
  token: "",
  isLoading: false,
});

export const mutations = {
  initializeStore(state) {
    if (localStorage.getItem("cart")) {
      state.cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  updateCart(state) {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  addToCart(state, item) {
    const exists = state.cart.items.filter(
      (i) => i.product.id === item.product.id
    );

    if (exists.length) {
      exists[0].quantity =
        parseInt(exists[0].quantity) + parseInt(item.quantity);
    } else {
      state.cart.items.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  incrementQuantity(state, item) {
    item.quantity += 1;

    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  decrementQuantity(state, item) {
    item.quantity -= 1;

    if (item.quantity === 0) {
      this.cart.items = this.cart.items.filter(
        (i) => i.product.id !== item.product.id
      );
    }

    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  removeFromCart(state, item) {
    this.cart.items = this.cart.items.filter(
      (i) => i.product.id !== item.product.id
    );
  },
};

export const actions = {};

export const modules = {};
