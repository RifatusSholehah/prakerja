<template>
  <div id="app">
    <Header />
    <div class="container">
      <div class="row">
        <div class="col-8">
          <ProductList />
        </div>
        <div class="col-4">
          <Cart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";


export default {
  name: "App",
  components: {
    Header,
    ProductList,
    Cart,
  },
};
</script>

<
    ProductListstyle>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
