<template>
  <div>
    <div class="row">
      <div class="col-5 q-pa-xs pr-1">
        <q-input rounded dense outlined v-model="minPrice"></q-input>
      </div>
      <div class="col-5 q-pa-xs pl-1">
        <q-input rounded dense outlined v-model="maxPrice"></q-input>
      </div>
      <div class="col-2 q-pa-xs pl-1">
        <q-btn round size="sm" color="primary" icon="mdi-shopping-search"></q-btn>
      </div>
    </div>
    <div class="q-pa-md q-pt-none">
      <q-range v-model="model" :min="0" :max="50" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      minPrice: "",
      maxPrice: "",
      model: {
        min: 10,
        max: 35
      }
    };
  }
};
</script>
<style lang="scss">
// .q-slider__thumb-container svg {
// //   color: white;
// //   box-shadow: $shadow-1;
// }
</style>