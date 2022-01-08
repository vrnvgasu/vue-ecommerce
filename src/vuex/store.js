import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store( {
  state: {}, // здесь храним все что надо
  mutations: {}, // здесь меняем данные из state (мутации синхронные)
  actions: {}, // работают асинхронно
  getters: {}, // дает возможность получить данные из state
});

export default store;