<template>
  <q-page>
    <div class="row justify-center q-col-gutter-md">
      <div class="col-xs-12 col-md-10">
        <section class="q-mt-sm q-mb-lg">
          <product-section :products="items"></product-section>
        </section>
        <section class="q-my-md q-pa-sm">
          <h2 class="text-h4 text-bold">Featured Products</h2>
          <div class="row q-col-gutter-md">
            <div
              class="col-xs-6 col-sm-4 col-md-55"
              v-for="(product, indx) in items"
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
import faker from "faker";

export default {
  name: "PageIndex",
  components: {
    ProductSection,
    ProductCard
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    getProducts() {
      for (var d = 0; d < 12; d++) {
        this.items.push({
          title: faker.name.jobType(),
          imageSrc: "https://placeimg.com/500/400/people?t=" + Math.random()
        });
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.getProducts();
    }, 1000);
  }
};
</script>
