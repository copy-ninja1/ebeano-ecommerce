<template>
  <div>
    <q-card class="other-shadow gt-sm">
      <q-card-section>
        <div class="text-h6 q-mb-sm text-bold">{{ cardTitle }}</div>
        <div class="row q-col-gutter-md" v-if="products.length > 0">
          <div
            class="col-xs-12 col-sm-6 col-md-3 col-md-55"
            v-for="(product, indx) in products.slice(0, 5)"
            :key="indx"
          >
            <product-card :bordered="true" :product="product"></product-card>
          </div>
        </div>
        <div class="row q-col-gutter-md" v-else>
          <div
            class="col-xs-12 col-sm-6 col-md-55"
            v-for="(product, indx) in 5"
            :key="indx"
          >
            <q-card flat bordered style="max-width: 300px">
              <div class="q-pa-xs">
                <q-skeleton height="150px" class="card" square />
              </div>
              <q-card-section>
                <q-skeleton type="text" class="text-subtitle1" />
                <q-skeleton type="text" width="50%" class="text-subtitle1" />
                <q-skeleton type="text" class="text-caption" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="lt-md">
      <horizontal-scroll :groupName="cardTitle" :items="products">
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
    },
    cardTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
