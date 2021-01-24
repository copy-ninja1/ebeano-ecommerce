<template>
  <q-page>
    <div class="row justify-center q-col-gutter-md">
      <div class="col-xs-12 col-md-10">
        <div class="row justify-center q-pa-sm">
          <div class="col-xs-12 col-md-9">
            <q-card flat class="q-my-lg card">
              <q-carousel
                animated
                control-color="amber"
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
              <div class="q-pa-md q-gutter-sm">
                <q-btn
                  no-caps
                  color="white"
                  text-color="primary"
                  push
                  v-for="(opt, index) in marketOpt"
                  :key="index"
                  >{{ opt.title }}</q-btn
                >
              </div>
            </q-card>
          </div>
        </div>
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
