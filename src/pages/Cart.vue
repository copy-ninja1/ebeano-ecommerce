<template>
  <q-page padding>
    <div class="row justify-center" style="margin-bottom:150px">
      <div class="col-xs-12 col-md-10">
        <div
          class="row no-wrap items-center q-my-md q-pa-sm  rounded-borders border-bold"
          :class="{
            'bg-grey-3': !$q.dark.isActive,
            'bg-dark': $q.dark.isActive
          }"
        >
          <h1
            class=" q-my-sm"
            :class="{ 'text-h4': $q.screen.gt.sm, 'text-h6': !$q.screen.gt.sm }"
          >
            Shopping Cart
          </h1>

          <q-space />

          <div class="q-gutter-sm">
            <q-btn
              color="primary"
              v-if="$q.screen.gt.sm"
              @click="(cartCostDialog = true), (costDialogPosition = 'top')"
              >cost</q-btn
            >
            <q-btn
              round
              color="white"
              text-color="grey-8"
              :disable="grid"
              :flat="grid"
              icon="mdi-grid-large"
              @click="changeLayout()"
            ></q-btn>
            <q-btn
              round
              color="white"
              :disable="!grid"
              :flat="!grid"
              text-color="grey-8"
              icon="mdi-format-list-bulleted-square"
              @click="changeLayout()"
            ></q-btn>
          </div>
        </div>
        <div class="row q-col-gutter-md">
          <div
            :class="{
              'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3': grid,
              'col-xs-12 col-sm-12 col-md-6 col-xl-4': !grid
            }"
            v-for="(product, indx) in items"
            :key="indx"
          >
            <product-card
              :flat="false"
              :gridStyle="grid"
              :product="product"
            ></product-card>
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="cartCostDialog" seamless :position="costDialogPosition">
      <q-card style="width: 100vw">
        <q-btn
          icon="mdi-close"
          color="red"
          round
          flat
          v-if="$q.screen.gt.sm"
          class="gt-sm"
          @click="cartCostDialog = !cartCostDialog"
        ></q-btn
        >
        <q-card-section class="row items-center">
          <div class="col-xs-12">
            <div>
              <span>shipping fee</span>
              <span class="float-right">$30</span>
            </div>
          </div>
          <div class="col-xs-12">
            <div>
              <span>subtotal</span>
              <span class="float-right">$730</span>
            </div>
          </div>
          <div class="col-xs-12">
            <div class="text-bold">
              <span>Total</span>
              <span class="float-right">$760.00</span>
            </div>
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn class="full-width" color="primary" push text-color="white"
            >Checkout</q-btn
          >
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
import ProductCard from "src/components/Cart-Product-Card.vue";
import faker from "faker";

export default {
  name: "PageIndex",
  components: {
    ProductCard
  },
  data() {
    return {
      items: [],
      grid: true,
      cartCostDialog: this.$q.screen.lt.md,
      // costDialogPosition: "bottom"
    };
  },
  computed: {
    costDialogPosition() {
      if (this.$q.screen.lt.md) return "bottom";
      else return "top";
    }
  },
  methods: {
    getProducts() {
      for (var d = 0; d < 8; d++) {
        this.items.push({
          title: faker.commerce.productName(),
          product: faker.commerce.productName(),
          price: faker.commerce.price(),

          imageSrc: "https://placeimg.com/500/400/tech?t=" + Math.random()
        });
      }
    },
    changeLayout() {
      this.grid = !this.grid;
    }
  },
  mounted() {
    setTimeout(() => {
      this.getProducts();
    }, 100);
  }
};
</script>
