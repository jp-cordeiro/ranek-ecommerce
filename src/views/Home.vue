<template>
  <section>
    <h1>Compre ou Venda</h1>
    <ProductsSearch/>
    <ProductsList/>
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

<style scoped>
h1{
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
