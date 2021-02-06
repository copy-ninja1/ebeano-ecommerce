<template>
  <div>
    <!-- Product Icon view -->
    <div class="bg-white container-fluid">
      <q-breadcrumbs class="text-grey pt-4" active-color="purple">
        <template v-slot:separator>
          <q-icon size="1.2em" name="arrow_forward" color="purple" />
        </template>

        <q-breadcrumbs-el label="Home" icon="home" />
        <q-breadcrumbs-el label="Components" icon="widgets" />
        <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
      </q-breadcrumbs>
      <div class="flex">
        <h4 class="text-weight-light text-h4 py-5">Phones And Tablets</h4>
        <q-space></q-space>
        <!-- <q-btn round flat icon="mdi-view-list"></q-btn> -->
        <!-- <q-icon size="md" name="mdi-view-list" /> -->
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            round
            flat
            color="grey"
            icon="mdi-view-grid"
            @click="changeView(true)"
          />
          <q-btn
            round
            flat
            color="grey"
            icon="mdi-view-list"
            @click="changeView(false)"
          />
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-xs-12 col-md-10">
        <div class="row justify-center">
          <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
            <filterOutlet></filterOutlet>
          </div>
          <div class="col-xs-12 col-sm-8 col-md-9 col-lg-10">
            <div class="row icon-view" v-if="getViewSetings()">
              <div
                class="col-xs-6 col-sm-6 col-md-4 col-lg-3 pa-2"
                v-for="(product, index) in products"
                :key="index"
              >
                <product-card-icon :product="product"></product-card-icon>
              </div>
            </div>
            <!-- Product List view -->
            <div class="row list-view" v-else>
              <div
                class="col-xs-12 col-sm-12 col-md-6 pa-2"
                v-for="(product, index) in products"
                :key="index"
              >
                <Product-card :product="product"></Product-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapAction, mapState, mapActions, mapGetters } from "vuex";
import productCardIcon from "components/Product/Views/Product-Card-Icon-View";
import productCardList from "components/Product/Views/Product-Card-List-View";
import ProductCard from "src/components/Product-card.vue";

export default {
  components: {
    // productCardList,
    // productCardIcon,
    ProductCard,
    filterOutlet: () => import("components/Filters/Filter-Outlet")
  },
  data() {
    return {
      //   iconView: this.getViewSetings,
      products: [
        {
          id: 1,
          title: "good to go",
          summry: "lorem ipsum gksiaesdpjpoaid",
          views: 340
        },
        {
          id: 2,
          title: "good to go",
          summry: "lorem ipsum gksiaesdpjpoaid",
          views: 250
        },
        {
          id: 3,
          title: "good to go",
          summry: "lorem ipsum gksiaesdpjpoaid",
          views: 435
        },
        {
          id: 4,
          title: "good to go",
          summry: "lorem ipsum gksiaesdpjpoaid",
          views: 10900
        },
        {
          id: 5,
          title: "good to go",
          summry: "lorem ipsum gksiaesdpjpoaid",
          views: 10900
        },
        {
          id: 6,
          title: "good to go",
          summry: "lorem ipsum gksiaesdpjpoaid",
          views: 10900
        },
        {
          id: 7,
          title: "good to go",
          summry: "lorem ipsum gksiaesdpjpoaid",
          views: 10900
        },
        {
          id: 8,
          title: "good to go",
          summry: "lorem ipsum gksiaesdpjpoaid",
          views: 10900
        },
        {
          id: 9,
          title: "good to go",
          summry: "lorem ipsum gksiaesdpjpoaid",
          views: 10900
        }
      ]
    };
  },
  methods: {
    //   view
    ...mapActions({
      changeView: "settings/changeview"
    }),
    ...mapGetters({
      getViewSetings: "settings/getView"
    })
  },
  mounted() {
    //   console.log(this.$store.state.settings.iconView)
    //   setInterval(()=>{
    //       console.log(this.iconView)
    //   },1000)
    // console.log("iconView", this.getViewSetings());
  }
};
</script>
<style lang="scss" scoped>
@media (min-width: 1440px) {
  .row > .col-lg-3 {
    height: auto;
    width: 20%;
  }
}
</style>
