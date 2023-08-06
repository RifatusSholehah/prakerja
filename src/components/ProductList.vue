<template>
  <div class="row">
    <div
      class="card"
      style="width: 15rem"
      v-for="item in products"
      :key="item.id"
    >
      <img :src="item.imgUrl" class="card-img-top" :alt="item.title" />
      <div class="card-body">
        <p class="card-title">{{ item.title }}</p>
        <p class="card-text">Rp {{ item.price.toLocaleString("id-ID") }}</p>
        <button class="btn btn-primary" @click="addItemToCart(item)">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["products"])
  },
   methods: {
    ...mapActions(["addItemToCart", "getProducts"]),
  },
  mounted(){
    this.getProducts();
  }
};
</script>

<style scoped>
 .card{
    padding: 20px;
    border: none;
 }
</style>