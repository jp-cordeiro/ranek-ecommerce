<template>
  <form>
    <input name="search" id="search" type="text" v-model="search" />
    <input
      type="submit"
      id="magnifier"
      value="Search"
      @click.prevent="searchProducts"
    />
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      search: '',
    };
  },
  methods: {
    ...mapActions(['seacrhByQuery']),
    searchProducts() {
      this.seacrhByQuery(this.search);
    },
  },
};
</script>

<style></style>
