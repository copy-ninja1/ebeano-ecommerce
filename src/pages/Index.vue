<template>
  <q-page padding>
    <div class="row justify-center q-col-gutter-md">
      <div class="col-xs-12 col-md-10">
        <section class="q-mt-sm q-mb-lg">
          <product-section></product-section>
        </section>
        <section class="q-my-md">
          <h2 class="text-h4 text-bold">Featured Products</h2>
          <div class="row q-col-gutter-md">
            <div
              class="col-xs-12 col-md-55"
              v-for="(product, indx) in 12"
              :key="indx"
            >
              <product-card :flat="false"></product-card>
            </div>
          </div>
        </section>
      </div>
    </div>
  </q-page>
</template>

<script>
import ProductSection from "src/components/Product-Section.vue";
import ProductCard from "src/components/Product-card.vue";
export default {
  name: "PageIndex",
  components: {
    ProductSection,
    ProductCard
  },
  data() {
    return {};
  }
};
</script>
