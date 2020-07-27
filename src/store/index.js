import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services/services';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsList: [],
  },
  mutations: {
    SET_PRODUCTS_LIST(state, productsList) {
      state.productsList = productsList;
    },
  },
  actions: {
    async loadProducts({ commit }) {
      const url = '/produto?_limit=10';
      await api.get(url).then(({ data }) => {
        const productsList = data;
        commit('SET_PRODUCTS_LIST', productsList);
      });
    },
    async seacrhByQuery({ commit }, query) {
      let url = '/produto?_limit=10&q=';
      await api.get(`${url}${query}`).then(({ data }) => {
        const productsList = data;
        console.log(productsList);
        commit('SET_PRODUCTS_LIST', productsList);
      });
    },
  },
  getters: {
    getProductsList(state) {
      return state.productsList;
    },
  },
  modules: {},
});
