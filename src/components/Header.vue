<template>
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Shopping Prakerja </span>
      <span class="navbar-brand mb-0 h1">
        Cart <span class="badge badge-primary">{{ totalQty }}</span>
      </span>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["cart"]),
    totalQty() {
      return this.cart.reduce((a, b) => a + b.qty, 0);
    },
  },
};
</script>

<style scoped>
header {
  margin-bottom: 10vh;
}
</style>
