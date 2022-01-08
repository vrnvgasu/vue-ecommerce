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
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++;
          }
        });

        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
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
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index);
    },
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