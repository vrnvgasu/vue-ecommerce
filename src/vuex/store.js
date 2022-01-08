import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store( {
  state: { // здесь храним все что надо
    products: [],
    cart: [],
  },
  mutations: { // здесь меняем данные из state (мутации синхронные)
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      state.cart.push(product);
    },
  },
  actions: { // работают асинхронно
    GET_PRODUCTS_FROM_API({commit}) {
      // получим данные через promis используя библиотеку axios
      return axios('http://127.0.0.1:3000/products', {
        method: "GET",
      })
        .then((products) => {
          // json из промиса передаем в mutations
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products; // возвращаем, т.к. можем еще вызывать и из компонентов
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    }
  },
  getters: { // дает возможность получить данные из state
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;