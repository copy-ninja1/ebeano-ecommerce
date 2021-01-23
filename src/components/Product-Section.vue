<template>
  <div>
    <q-card class="other-shadow">
      <q-card-section>
        <div class="text-h6 q-mb-sm text-bold">New Products</div>
        <div class="row q-col-gutter-md">
          <div
            class="col-xs-12 col-sm-6 col-md-3 col-md-55"
            v-for="(product, indx) in 5"
            :key="indx"
          >
            <product-card :bordered="true"></product-card>
          </div></div
      ></q-card-section>
    </q-card>
  </div>
</template>
<script>
import ProductCard from "./Product-card.vue";

export default {
  components: {
    ProductCard
  },
  props:{

  },
  data() {
    return {};
  }
};
</script>
