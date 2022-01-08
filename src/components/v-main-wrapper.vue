<template>
  <div class="v-main-wrapper">
    <p>{{title}}</p>
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>
import vCatalog from './v-catalog';
import vCart from './v-cart';

export default {
  // обязательный параметр – имя компонента
  name: "v-main-wrapper",
  components: { // тут перечисляются дочерние компоненты
    vCatalog,
    vCart,
  },
  props: {},  // что прилетает из родителя
  data() {    // персональные данные компонента
    return {
      title: 'Main wrapper', // можно отрендерить в темплейте {{title}}
    };
  },
  computed: {}, // вычислительные свойства компонента
  methods: {}, // методы логики: клики, скрытие, всплытие и др
  watch: {}, // может следить за событиями
  mounted() {   // хуки жизненного цикла. Пример на состояние после рендерига
    console.log(('Hello'));
  }
}
</script>

<!-- можно ставить <style scoped>, чтобы стили применялись всегда-->
<style scoped>
  .v-main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    flex-direction: column;
  }
</style>