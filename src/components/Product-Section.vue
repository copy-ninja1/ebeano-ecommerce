<template>
  <div>
    <q-card class="other-shadow gt-sm">
      <q-card-section>
        <div class="text-h6 q-mb-sm text-bold">New Products</div>
        <div class="row q-col-gutter-md">
          <div
            class="col-xs-12 col-sm-6 col-md-3 col-md-55"
            v-for="(product, indx) in products.slice(0, 5)"
            :key="indx"
          >
            <product-card :bordered="true"></product-card>
          </div></div
      ></q-card-section>
    </q-card>
    <div class="lt-md">
      <horizontal-scroll groupName="New Product" :items="products">
      </horizontal-scroll>
    </div>
  </div>
</template>
<script>

export default {
  components: {
    ProductCard: () => import("components/Product-card"),
    HorizontalScroll: () => import("components/Horizontal-Scroll")
  },
  props: {
    products: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
</script>
