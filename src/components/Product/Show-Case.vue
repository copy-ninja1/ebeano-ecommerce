<template>
  <q-card class="border-r-md">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-5 q-pa-xs">
        <div class="row justify-center">
          <div class="col-xs-12">
            <q-img
              :src="url"
              :ratio="1"
              class="rounded-borders"
              :style="$q.screen.lt.md?'max-height: 300px;width:100%':'height: 100%;width:100%'"
            >
              <!-- <template v-slot:loading>
                <div class="absolute-full flex flex-center text-white" v-randColors>
                  <q-spinner color="white" size="1em" :thickness="2" />
                </div>
              </template>
              <template v-slot:error>
                <div class="absolute-full flex flex-center text-white" v-randColors></div>
              </template> -->
            </q-img>
          </div>
          <div class="col-xs-2 q-pa-xs" v-for="n in 4" :key="n">
            <q-img
              :src="url"
              :ratio="1"
              class="rounded-borders"
              :style="$q.screen.lt.md?'max-height: 300px;width:100%':'height: 100%;width:100%'"
            >
              <!-- <template v-slot:loading>
                <div class="absolute-full flex flex-center text-white" v-randColors>
                  <q-spinner color="white" size="1em" :thickness="2" />
                </div>
              </template>
              <template v-slot:error>
                <div class="absolute-full flex flex-center text-white" v-randColors></div>
              </template> -->
            </q-img>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-7 q-pa-md">
        <h5
          class="q-my-md text-grey-9 text-weight-light"
          :class="$q.screen.lt.sm?'text-h6':$q.screen.lt.md?'text-h5':'text-h4'"
        >Polystar 55" Andriod Smart 4k bluetooth Tv Pv-led55a7000</h5>
        <!-- <q-separator></q-separator> -->
        <h6 class="q-mb-sm text-h6 text-weight-light text-grey-9">
          <span class="text-weight-bold">Prices :</span> $5000,80
        </h6>
        <!-- <q-separator></q-separator> -->
        <div class="q-my-md text-grey-8 text-body2">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <span class="flex q-my-md text-grey-9 text-weight-bold">
            Quantity :
            <prod-counter class="q-ml-sm"></prod-counter>
          </span>
        </div>
        <!-- <q-separator></q-separator> -->
        <div class="row">
          <div class="col">
            <q-btn rounded unelevated no-caps class="q-mt-md" color="primary" label="Add to cart"></q-btn>
          </div>
        </div>
      </div>
    </div>
    <!-- <q-card-section>lorem</q-card-section> -->
  </q-card>
</template>
<script>
import prodCounter from "components/Cart/Product-counter-btn";

// import productInfo from
export default {
  components: {
    "prod-counter": prodCounter
  },
  data() {
    return {
      tab: "mails",
      url: null,
      colors: [
        "red",
        "blue",
        "green",
        "indigo",
        "purple",
        "teal",
        "orange",
        "brown",
        "deep-orange",
        "blue-grey",
        "cyan",
        "purple-10",
        "deep-purple-10",
        "pink-10",
        "amber-10",
        "light-green-10",
        "orange-10",
        "brown-10",
        "teal-10",
        "grey-9"
      ]
    };
  },
  methods: {
    randomImageLoadingColor() {
      return `bg-${
        this.colors[Math.floor(Math.random() * this.colors.length)]
      }`;
    },
    toggle() {
      this.url =
        this.url === null
          ? "https://placeimg.com/500/300/nature?t=" + Math.random()
          : null;
    }
  },
  mounted() {
    this.toggle();
  }
};
</script>
<style lang="scss" scoped>
.case_product_img {
  height: 20rem;
  width: 90%;
  margin: auto;
}
</style>
