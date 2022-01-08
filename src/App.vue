<template>
  <div id="app">
    <h1>Hello world!</h1>
    <v-main-wrapper /> <!--Первый дочерний компонент-->
  </div>
</template>

<script>
// импортируем первый компонент
import vMainWrapper from './components/v-main-wrapper';

export default {
  name: 'App',
  components: {
    vMainWrapper, // дочерний компонент
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
