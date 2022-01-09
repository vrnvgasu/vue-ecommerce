import axios from "axios";

export default {
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
}