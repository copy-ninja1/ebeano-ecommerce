<template>
  <q-card class="check q-pb-sm">
    <div class="q-mt-none q-mb-xs q-pa-sm text-h6 inline">
      Order Summry
      <span class="float-right">35</span>
    </div>
    <q-separator></q-separator>
    <div class="q-pa-sm text-subtitle1 inline">
      SubTotal
      <span class="float-right">$40000</span>
    </div>
    <q-separator></q-separator>
    <div class="q-pa-sm text-subtitle1 inline">
      Deleivry Price
      <span class="float-right">$40000</span>
    </div>
    <q-separator></q-separator>
    <div class="q-pa-sm text-h6 inline">
      Total
      <span class="float-right">$40000</span>
    </div>
    <div style="width:90%;margin:auto;">
      <q-btn outline color="green" class="full-width">Countinue to checkout</q-btn>
    </div>
  </q-card>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.check {
  margin: auto;
}
</style>
