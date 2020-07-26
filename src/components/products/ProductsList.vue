<template>
  <section class="products-container">
    <div v-for="product in products" :key="product.id">
      <img
        v-if="product.pictures"
        :src="product.pictures[0].src"
        :alt="product.pictures[0].title"
      />
      <p class="price">{{ product.price }}</p>
      <h2 class="title">{{ product.name }}</h2>
      <p>{{ product.description }}</p>
    </div>
  </section>
</template>

<script>
import api from '@/services/services';

export default {
  data() {
    return {
      products: null,
    };
  },
  methods: {
    getProducts() {
      api.get('/produto').then(({ data }) => {
        this.products = data;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style></style>
