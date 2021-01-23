<template>
  <q-card :bordered="bordered" :flat="flat" :class="contentClass">
    <img src="https://cdn.quasar.dev/img/mountains.jpg" />

    <q-card-section>
      <div class="text-h6">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>
  </q-card>
</template>
<script>
export default {
  props: {
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
        if (this.flat ==true) {
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
