<template>
  <div class="v-catalog-item">
    <h3>Item</h3>
    <p>Item 1</p>
    <p>Price: 100</p>
    <p>Add to cart</p>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item"
}
</script>

<!-- lang="scss" надо указать, что используем scss -->
<style lang="scss">
  .v-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
  }
</style>