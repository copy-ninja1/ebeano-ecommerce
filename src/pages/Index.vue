<template>
  <q-page>
    <div class="row justify-center q-col-gutter-md">
      <div class="col-xs-12 col-md-10">
        <div class="row justify-center q-pa-sm">
          <div class="col-xs-12 col-md-10">
            <q-card flat class="q-my-lg card">
              <q-carousel
                animated
                control-color="amber"
                :height="$q.screen.lt.md ? '200px' : '400px'"
                navigation-icon="radio_button_unchecked"
                swipeable
                arrows
                navigation
                control-type="unelevated"
                v-model="slide"
                infinite
                class="bg-primary text-white"
              >
                <q-carousel-slide
                  :name="1"
                  img-src="https://ebeanomarket.com/assets/images/banners/slider2.jpg"
                />
                <q-carousel-slide
                  :name="2"
                  img-src="https://ebeanomarket.com/assets/images/banners/slider3.jpg"
                />
                <q-carousel-slide
                  :name="3"
                  img-src="https://ebeanomarket.com/assets/images/banners/slider1.jpg"
                />
              </q-carousel>
            </q-card>
            <div :class="{ 'q-pa-sm': $q.screen.gt.sm }">
              <horizontal-btn>
                <q-btn
                  no-caps
                  :color="$q.dark.isActive ? 'grey-9' : 'white'"
                  class="q-mx-sm"
                  :text-color="$q.dark.isActive ? 'white' : 'primary'"
                  v-for="(opt, index) in marketOpt"
                  :key="index"
                  >{{ opt.title }}</q-btn
                >
              </horizontal-btn>
            </div>
          </div>
        </div>
        <section class="q-mt-sm q-mb-lg">
          <product-section :products="items" cardTitle="New Products"></product-section>
        </section>
        <section class="q-my-md q-pa-sm">
          <h2 class="text-h4 text-bold">Featured Products</h2>
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
import ProductSection from "src/components/Product-Section.vue";
import ProductCard from "src/components/Product-card.vue";
import faker from "faker";

export default {
  name: "PageIndex",
  components: {
    ProductSection,
    ProductCard,
    HorizontalBtn: () => import("components/Horizontal-btn")
  },
  data() {
    return {
      items: [],
      slide: 1,
      marketOpt: [
        { title: "Ebeano Market Place" },
        { title: "Ebeano Artisans" },
        { title: "Ebeano Real Estate" },
        { title: "Ebeano Utility" },
        { title: "Ebeano Automobile" },
        { title: "Ebeano Bookings" }
      ]
    };
  },
  methods: {
    getProducts() {
      for (var d = 0; d < 12; d++) {
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
    }, 100);
  }
};
</script>
