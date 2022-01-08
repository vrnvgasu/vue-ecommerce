<template>
  <div class="v-catalog">
    <h3>Catalog</h3>
    <div class="v-catalog__list">
      <v-catalog-item />
    </div>
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