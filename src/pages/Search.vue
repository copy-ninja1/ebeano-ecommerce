<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-xs-12 col-md-10">
        <section class="q-my-md q-pa-sm">
          <!-- <h2 class="text-h4 text-bold">Featured Products</h2> -->
          <div class="row q-col-gutter-md" v-if="items.length > 0">
            <div
              class="col-xs-6 col-sm-4 col-md-55"
              v-for="(product, indx) in items"
              :key="indx"
            >
              <product-card :flat="false" :product="product"></product-card>
            </div>
          </div>

          <div class="row q-col-gutter-md" v-else>
            <div
              class="col-xs-6 col-sm-4 col-md-55"
              v-for="(product, indx) in 12"
              :key="indx"
            >
              <q-card flat class="card" style="max-width: 300px">
                <div class="q-pa-xs">
                  <q-skeleton height="150px" />
                </div>
                <q-card-section>
                  <q-skeleton type="text" class="text-subtitle1" />
                  <q-skeleton type="text" width="50%" class="text-subtitle1" />
                  <q-skeleton type="text" class="text-caption" />
                </q-card-section>
              </q-card>
            </div>
          </div>
        </section>
      </div>
    </div>
  </q-page>
</template>
<script>
import faker from "faker";

export default {
  components: {
    ProductCard: () => import("src/components/Product-card.vue")
  },
  data() {
    return {
      items: []
    };
  },
  methods: {
    getProducts() {
      for (var d = 0; d < 20; d++) {
        this.items.push({
          title: faker.commerce.productName(),
          product: faker.commerce.productName(),
          price: faker.commerce.price(),

          imageSrc: "https://placeimg.com/500/400/tech?t=" + Math.random()
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
