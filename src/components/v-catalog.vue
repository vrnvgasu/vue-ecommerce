<template>
  <div class="v-catalog">
    <h3>Catalog</h3>
    <v-catalog-item />
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
}
</script>

<style>

</style>