<template>
  <q-card falt class="card">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab
        name="overview"
        :no-caps="$q.screen.lt.sm ? true : false"
        label="Overview"
      />
      <q-tab
        name="specifications"
        :no-caps="$q.screen.lt.sm ? true : false"
        label="Specifications"
      />
      <q-tab
        name="return_policy"
        :no-caps="$q.screen.lt.sm ? true : false"
        label="Return Policy"
      />
      <q-tab
        name="reviews"
        :no-caps="$q.screen.lt.sm ? true : false"
        label="Customer Reviews"
      />
       <q-tab
        name="seller"
        :no-caps="$q.screen.lt.sm ? true : false"
        label="seller's Info"
      />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="overview">
        <div class="text-h6">Overview</div>
        <p>
          The only watch for the genteel go-getter: our dashing Dylan timepiece
          will take you places. The sleek rose gold-tone stainless steel bezel
          safeguards our signature sophistication, while the durable and sleek
          silicone strap finishes this piece with sporty panache. It will be a
          seamless addition to workday wares and seaside styles alike.
        </p>
      </q-tab-panel>
      <q-tab-panel name="specifications">
        <div class="text-h6">Specifications</div>
        <div class="product-specs q-pa-sm">
          <ul class="product-specs-list util-clearfix">
            <li class="product-prop line-limit-length">
              <span class="text-grey-9 text-subtitle1">Brand Name:&nbsp;</span>
              <span
                class="property-desc text-grey-7 line-limit-length"
                title="paycham group"
                >paycham group</span
              >
            </li>
            <li class="product-prop line-limit-length">
              <span class="text-grey-9 text-subtitle1"
                >Main Material:&nbsp;</span
              >
              <span
                class="property-desc text-grey-7 line-limit-length"
                title="lether"
                >lether</span
              >
            </li>
            <li class="product-prop line-limit-length">
              <span class="text-grey-9 text-subtitle1"
                >color:&nbsp;</span
              >
              <span
                class="property-desc text-grey-7 line-limit-length"
                title="Soft Handle"
                >black</span
              >
            </li>
            <li class="product-prop line-limit-length">
              <span class="text-grey-9 text-subtitle1">Gender:&nbsp;</span>
              <span
                class="property-desc text-grey-7 line-limit-length"
                title="Men"
                >Men</span
              >
            </li>
          </ul>
        </div>
      </q-tab-panel>
      <q-tab-panel name="return_policy">
        <div class="text-h6">Return policy</div>
        No returns or exchanges for this item.
      </q-tab-panel>
      <q-tab-panel name="reviews">
        <div class="text-h6 flex">
          <span>Reviews</span>
          <div class="q-mt-xs text-caption absolute-right q-ma-lg q-mt-sm">
            <router-link to="/about/review-posting-policy">
              <q-icon size="xs" name="mdi-alert-circle" />
              <span class="text-grey-9 q-pl-xs">Review Policy</span>
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-4">
            <rateCounter class="q-pa-sm"></rateCounter>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-8">
            <productReview></productReview>
          </div>
        </div>
      </q-tab-panel>
         <q-tab-panel name="seller">
        <div class="text-h6 flex">
          <span>Seller's Info</span>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>
<script>
export default {
  components: {
    rateCounter: () => import("components/Product/Review/Rate-Counter"),
    productReview: () => import("components/Product/Review/Product-Reviews")
  },
  data() {
    return {
      tab: "reviews"
    };
  }
};
</script>
<style lang="scss" scoped>
.product-specs .product-specs-list li {
  position: relative;
  width: 50%;
  float: left;
  line-height: 28px;
  list-style: none;
  margin-left: 0;
}

.product-specs .product-prop {
  display: inline-block;
  max-width: 50%;
}
.util-clearfix {
  zoom: 1;
}
.line-limit-length,
.two-line-clamp {
  overflow: hidden;
  text-overflow: ellipsis;
}
.line-limit-length {
  white-space: nowrap;
}
</style>
