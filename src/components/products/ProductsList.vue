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
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      products: 'getProductsList',
    }),
  },
  methods: {
    ...mapActions(['loadProducts']),
  },
  async created() {
    await this.loadProducts();
  },
};
</script>

<style></style>
