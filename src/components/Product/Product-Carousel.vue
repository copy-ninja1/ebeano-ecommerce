<template>
  <div class="row q-mt-sm">
    <hooper
      ref="carousel"
      @slide="updateCarousel"
      :settings="cardSettings"
      style="height:fit-content"
      class="bg-white"
    >
      <slide v-for="(product, indx) in 12" :key="indx" :index="indx" style="padding:4px;">
        <!-- <productCard :product="slide"></productCard> -->
        <q-card flat bordered class="ideal_border-radius">
          <q-img class="card_img" src="https://cdn.quasar.dev/img/mountains.jpg">
            <!-- <template v-slot:loading>
              <div class="absolute-full flex flex-center text-white" v-randColors>
                <q-spinner color="white" size="1em" :thickness="2" />
              </div>
            </template>
            <template v-slot:error>
              <div class="absolute-full flex flex-center text-white" v-randColors></div>
            </template> -->
          </q-img>

          <q-card-section class="q-pl-sm q-py-xs q-pr-xs">
            <p class="q-ma-none text-weight-bold text-grey-7">Jollof rice</p>
            <div>
              <p class="text-weight-regular text-grey-9 q-pt-xs q-pb-none q-ma-none">Rice.Nigerian.Meat</p>
              <p class="text-weight-medium q-ma-none">
                4.5
                <q-icon name="mdi-star-four-points-outline" />
              </p>
            </div>
          </q-card-section>
        </q-card>
        <!--  -->
      </slide>
    </hooper>
  </div>
</template>
<script>
import { Hooper, Slide } from "hooper";

export default {
  components: {
    Hooper,
    Slide
  },
  props: {
    cardSettings: {
      type: Object
    }
  },
  data() {
    return {
      carouselData: 0
    };
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
    showdrop(val) {
      this.currentShow = val;
    }
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    }
  }
};
</script>
