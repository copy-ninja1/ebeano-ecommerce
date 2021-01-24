<template>
  <q-card :bordered="bordered" :flat="flat" :class="contentClass">
    <div class="q-pa-xs" style="min-height:100px">
      <img
        class="rounded-borders full-width"
        :class="{'card':flat}"
        src="https://cdn.quasar.dev/img/mountains.jpg"
      />
    </div>
    <q-card-section :class="{'q-pa-sm':$q.screen.lt.md}">
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
