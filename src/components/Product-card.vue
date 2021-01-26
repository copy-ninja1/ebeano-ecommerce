<template>
  <q-card :bordered="bordered" :flat="flat" :class="contentClass">
    <div class="q-pa-xs" style="height:160px">
      <img
        class="rounded-borders full-width full-height"
        :class="{ card: flat }"
        :src="product.imageSrc"
      />
    </div>
      <!-- <div
        class="text-h6 "
        :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-grey-8'}`"
      >
        {{ product.title }}
      </div>
      <div class="text-subtitle2 text-primary">${{ product.price }}</div> -->
      <q-list>
        <q-item>
          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium text-body1"> {{product.title}}</span>
            </q-item-label>
            <!-- <q-item-label caption lines="1">
              @rstoenescu in #1: > The build system
            </q-item-label> -->
            <q-item-label
              lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
            >
              <span class="cursor-pointer">${{product.price}}</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            </div>
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
