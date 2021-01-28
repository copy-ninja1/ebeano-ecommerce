<template>
  <q-card :bordered="bordered" :flat="flat" :class="contentClass">
    <div class="q-pa-xs" style="height:160px">
     <router-link :to="`/${product.title}`">
        <img
        class="rounded-borders full-width full-height"
        :class="{ card: flat }"
        :src="product.imageSrc"
      />
     </router-link>
    </div>
    <q-list>
      <q-item  :class="{ 'q-px-xs': $q.screen.lt.md }">
        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium " :class="{'text-body1':! $q.screen.lt.md,'text-body2': $q.screen.lt.md}">
              {{ product.title }}</span
            >
          </q-item-label>
          <q-item-label
            lines="1"
            class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
          >
            <span class="cursor-pointer">${{ product.price }}</span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: true
    },
    "content-class": {
      type: String,
      default: function() {
        if (this.flat == true) {
          return "";
        } else {
          return "card";
        }
      }
    }
  },
  data() {
    return {};
  }
};
</script>
