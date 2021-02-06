<template>
  <div class="q-pa-md">
    <!-- <q-option-group :options="options" label="Notifications" type="checkbox" v-model="group" />
    <div class="q-px-sm">
      Your Pick:
      <strong>{{ group }}</strong>
    </div>-->
    <div class="q-gutter-sm" v-for="(option,index) in options" :key="index">
      <q-checkbox v-model="selection" :val="option.value" :label="option.label" color="teal"></q-checkbox>
      <span class="q-mt-xs">{{option.totalItem}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array
    }
  },
  data() {
    return {
      selection: ["teal", "red"],
      group: []
    };
  }
};
</script>