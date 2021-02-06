<template>
  <div class>
    <div class="row justify-center q-mt-md q-mb-lg">
      <div class="col-1 md"></div>
      <div class="col-xs-12 col-md-10">
        <show-case></show-case>
      </div>
      <div class="col-1 md"></div>
    </div>
    <div class="row justify-center q-my-md">
      <div class="col-1 md"></div>
      <div class="col-xs-12 col-md-10">
        <product-info class="q-pb-md"></product-info>
      </div>
      <div class="col-1 md"></div>
    </div>
  </div>
</template>
<script>
// import productInfo from "";

export default {
  components: {
    showCase: () => import("components/Product/Show-Case"),
    productInfo: () => import("components/Product/Review/Product-Info")
  },
  data() {
    return {};
  }
};
</script>
