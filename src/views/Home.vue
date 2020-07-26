<template>
  <section>
    <h1>Compre ou Venda</h1>
  </section>
</template>

<script>
import ProductsSearch from '@/components/products/ProductsSearch'
import ProductsList from '@/components/products/ProductsList'

export default {
  name: "Home",
  components:{
    ProductsSearch,
    ProductsList
  }
};
</script>
