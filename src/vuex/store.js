import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store( {
  state: { // здесь храним все что надо
    products: [],
  },
  mutations: { // здесь меняем данные из state (мутации синхронные)
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    }
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
  },
  getters: { // дает возможность получить данные из state
    PRODUCTS(state) {
      return state.products;
    }
  },
});

export default store;