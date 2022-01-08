<template>
  <div class="v-catalog">
    <h3>Catalog</h3>
    <div class="v-catalog__list">
      <!-- должны указать уникальное значение для ключа -->
      <!-- product из массива связали с product_data из props дочернего компонента -->
      <!-- связали метод sendArticle, вызываемый в ребенке(товаре) с методом родителя showChildArticleInConsole (каталог) -->
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @sendArticle="showChildArticleInConsole"
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
    ]),
  },
   methods: {
     ...mapActions([
       // сделали это, чтобы была возможность обратить к методу через this внутри компонента
       'GET_PRODUCTS_FROM_API',
     ]),
     showChildArticleInConsole(data) {
       console.log(data);
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
  }
</style>