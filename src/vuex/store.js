import Vue from "vue";
import Vuex from 'vuex';

import commonActions from "./actions/actions";
import apiRequests from "./actions/api-requests";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

const actions = {...commonActions, ...apiRequests};

Vue.use(Vuex);

let store = new Vuex.Store( {
  state: { // здесь храним все что надо
    products: [],
    cart: [],
  },
  mutations, // здесь меняем данные из state (мутации синхронные)
  actions, // работают асинхронно
  getters, // дает возможность получить данные из state
});

export default store;