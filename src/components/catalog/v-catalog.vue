<template>
  <div class="v-catalog">
    <!--  в роуте указали cart для компонента корзины. Также передаем в этот компонент данные через params  -->
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h3>Catalog</h3>
    <div class="v-catalog__list">
      <!-- должны указать уникальное значение для ключа -->
      <!-- product из массива связали с product_data из props дочернего компонента -->
      <!-- связали метод addToCart, вызываемый в ребенке(товаре) с методом родителя addToCart (каталог) -->
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
// импортировали экшены и гетторы из vuex
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      // сделали это, чтобы была возможность обратить к методу геттера через this внутри компонента
      'PRODUCTS',
        'CART',
    ]),
  },
   methods: {
     ...mapActions([
       // сделали это, чтобы была возможность обратить к методу через this внутри компонента
       'GET_PRODUCTS_FROM_API',
         'ADD_TO_CART',
     ]),
     addToCart(data) {
       this.ADD_TO_CART(data);
     }
   },
  mounted() {
    // на этом хуке вызываем action из vuex
    this.GET_PRODUCTS_FROM_API();
  }
}
</script>

<style lang="scss">
  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &__link_to_cart {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: $padding*2;
      border: solid 1px #aeaeae;
    }
  }
</style>