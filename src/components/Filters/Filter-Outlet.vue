<template>
  <q-list bordered class="rounded-borders bg-white">
    <q-expansion-item
      default-opened
      expand-icon-toggle
      expand-separator
      icon="mdi-cash"
      label="Price"
    >
      <q-card>
        <q-card-section class="q-pa-none">
          <price-filter></price-filter>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      default-opened
      expand-icon-toggle
      expand-separator
      icon="mdi-cash"
      label="Colours"
    >
      <q-card>
        <q-card-section class="q-pa-none">
          <color-filter></color-filter>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      default-opened
      expand-icon-toggle
      expand-separator
      icon="mdi-cash"
      label="Brand"
    >
      <q-card>
        <q-card-section class="q-pa-none">
          <selection-filter :options="options"></selection-filter>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>
<script>
export default {
  components: {
    priceFilter: () => import("components/Filters/Price"),
    colorFilter: () => import("components/Filters/Color"),
    selectionFilter: () => import("components/Filters/Selection")
  },
  data() {
    return {
        options: [
        { label: "Battery too low", value: "bat",totalItem:500, },
        { label: "Friend request", value: "friend", color: "green" ,totalItem:895,},
        { label: "Picture uploaded", value: "upload", color: "red",totalItem:4009, }
      ]
    };
  }
};
</script>