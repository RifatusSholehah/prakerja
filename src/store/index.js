import Vue from "vue";
import Vuex from "vuex";
import products from "../api/products.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters:{
    products: (state) => state.products,
    cart: (state) => state.cart,
  },
  actions:{
    getProducts({ commit }) {
      commit("getProductData");
    },
    addItemToCart({ commit }, item) {
      commit("addToCart", item);
    },
    removeItemFromCart({ commit }, id) {
      commit("removeFromCart", id);
    },
    addQty({ commit }, id) {
      commit("addQty", id);
    },
    reduceQty({ commit }, id) {
      commit("reduceQty", id);
    },
    emptyCart({ commit }) {
      commit("emptyCart");
    }
  },
  mutations:{
    getProductData(state) {
      state.products = products;
    },
    addToCart(state, item) {
      const productInCart = state.cart.find((product) => product.id === item.id);
      if (!productInCart) {
        state.cart.push({ ...item, qty: 1 });
      } else {
        productInCart.qty++;
      }
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    addQty(state, id) {
      const productInCart = state.cart.find((product) => product.id === id);
      productInCart.qty++;
    },
    reduceQty(state, id) {
      const productInCart = state.cart.find((product) => product.id === id);
      if (productInCart.qty > 1) {
        productInCart.qty--;
      } else {
        state.cart.splice(state.cart.indexOf(productInCart, 1));
      }
    },
    emptyCart(state) {
      state.cart = []
    }
  },
});
