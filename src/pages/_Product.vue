<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-xs-12 col-md-10">
        <div class="row justify-around q-col-gutter-md">
          <div class="col-xs-12 col-md-5">
            <div class="row justify-center q-col-gutter-md">
              <div class="col-xs-12">
                <q-card flat bordered>
                  <img
                    src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/J/107461_1539354397.jpg"
                  />
                </q-card>
              </div>
              <div
                class="col-xs-3 col-md-2 col-xl-3"
                v-for="(n, i) in 4"
                :key="i"
              >
                <q-card flat bordered>
                  <img
                    src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/J/107461_1539354397.jpg"
                    alt=""
                    srcset=""
                  />
                </q-card>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <h2 class="text-h4 text-bold q-mb-sm">
              {{ $route.params.productTitle }}
            </h2>
            <h4 class="text-h6 q-my-sm">
              By <span class="text-primary text-body1">paycham group</span>
            </h4>
            <div class="row q-col-gutter-md items-center">
              <div class="col-3">
                <div
                  class="q-pa-sm bg-amber-2 text-amber-9 text-h6  rounded-borders text-center"
                >
                  <sup>$</sup> <span class="text-h4  text-bold">500</span>
                </div>
              </div>
              <div class="col-9 text-green">
                <p class="q-my-none">You can save</p>
                <div class="text-h6 q-my-none text-bold">5%</div>
              </div>
            </div>
            <div class="q-my-md">
              <p class="text-body1">
                The only watch for the genteel go-getter: our dashing Dylan
                timepiece will take you places. The sleek rose gold-tone
                stainless steel bezel safeguards our signature sophistication,
                while the durable and sleek silicone strap finishes this piece
                with sporty panache. It will be a seamless addition to workday
                wares and seaside styles alike.
              </p>
            </div>
            <div class="q-my-md q-gutter-md">
              <div class="text-h6 q-my-none  text-bold">
                Quantity
              </div>

              <q-btn-group>
                <q-btn
                  :color="$q.dark.isActive ? 'grey-9' : 'white'"
                  :text-color="$q.dark.isActive ? 'white' : 'primary'"
                  icon="mdi-minus"
                />
                <q-btn
                  :color="$q.dark.isActive ? 'grey-9' : 'white'"
                  :text-color="$q.dark.isActive ? 'white' : 'primary'"
                  disable
                  label="1"
                />
                <q-btn
                  :color="$q.dark.isActive ? 'grey-9' : 'white'"
                  :text-color="$q.dark.isActive ? 'white' : 'primary'"
                  icon="mdi-plus"
                />
              </q-btn-group>
              <q-btn no-caps color="primary">Add to cart</q-btn>
            </div>
          </div>
        </div>
        <section class="lt-md" v-if="$q.screen.lt.md">
          <product-section
            :products="items"
            cardTitle="Similar Items"
          ></product-section>
        </section>
        <section v-else class="q-my-md q-pa-sm gt-sm">
          <h2 class="text-h4 text-bold">Similar Items You May Like</h2>
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
    ProductSection: () => import("components/Product-Section"),
    ProductCard: () => import("components/Product-card")
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
