<template>
  <div class="v-main-wrapper">
    <!--  Если будем передавать данные не из vuex по url, то они слетят
      keep-alive - позволяет сохранять состояние
      -->
    <keep-alive>
      <!--   router-view - сюда будут помещаться компоненты в зависимости от роута   -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  // обязательный параметр – имя компонента
  name: "v-main-wrapper",
  props: {},  // что прилетает из родителя
  computed: { // вычислительные свойства компонента
  },
  methods: {}, // методы логики: клики, скрытие, всплытие и др
  watch: {}, // может следить за событиями
}
</script>

<!-- можно ставить <style scoped>, чтобы стили применялись всегда-->
<style scoped>
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>