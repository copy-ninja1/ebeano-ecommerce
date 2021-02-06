<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      v-if="$q.screen.gt.sm"
      class=" text-grey-9"
      :class="{ 'bg-white': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }"
    >
      <q-toolbar>
        <router-link to="/">
          <img
            style="width:100px"
            src="https://ebeanomarket.com/assets/images/ebeano-logo.png"
        /></router-link>
        <q-space></q-space>
        <div
          class="custom-shadow q-px-sm disabled-input border-input-bold gt-sm"
          style="width:40%"
        >
          <q-input
            borderless
            dense
            rounded
            standout
            placeholder="search product"
            v-model="search"
          >
            <template v-slot:append>
              <q-btn round dense flat icon="mdi-magnify" />
            </template>
          </q-input>
        </div>
        <q-space></q-space>
        <q-btn
          flat
          round
          dense
          to="/cart-overview"
          :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-dark'}`"
          icon="mdi-cart-outline"
        />
        <q-btn
          to="/account/login"
          icon="mdi-account"
          :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-dark'}`"
          flat
          round
        ></q-btn>
        <q-btn
          @click="darkMode(!$q.dark.isActive)"
          :icon="
            `${$q.dark.isActive ? 'mdi-weather-night' : 'mdi-weather-sunny'}`
          "
          :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-dark'}`"
          flat
          round
        ></q-btn>
      </q-toolbar>
    </q-header>
    <q-header
      v-else
      :class="{
        'bg-white text-grey-9': !$q.dark.isActive,
        'bg-dark': $q.dark.isActive
      }"
    >
      <q-toolbar>
        <q-btn
          to="/"
          icon="mdi-chevron-left"
          :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-dark'}`"
          flat
          round
        ></q-btn>
        <!-- <q-space></q-space> -->
        <q-toolbar-title class="text-center">
          <router-link to="/">
            <img
              style="width:100px"
              src="https://ebeanomarket.com/assets/images/ebeano-logo.png"
          /></router-link>
        </q-toolbar-title>
        <!-- <q-space></q-space> -->
        <q-btn
          flat
          round
          dense
          to="/cart-overview"
          :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-dark'}`"
          icon="mdi-cart-outline"
        />
        <q-btn
          to="/account/login"
          icon="mdi-account"
          :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-dark'}`"
          flat
          round
        ></q-btn>
        <q-btn
          @click="darkMode(!$q.dark.isActive)"
          :icon="
            `${$q.dark.isActive ? 'mdi-weather-night' : 'mdi-weather-sunny'}`
          "
          :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-dark'}`"
          flat
          round
        ></q-btn>
      </q-toolbar>
      <div class="row justify-center">
        <div class="col-10">
          <div
            class="q-px-sm rounded-borders"
            :class="{
              'bg-grey-3': !$q.dark.isActive,
              'bg-grey-8': $q.dark.isActive
            }"
          >
            <q-input
              borderless
              dense
              rounded
              standout
              placeholder="search product"
              v-model="search"
            >
              <template v-slot:append>
                <q-btn round dense flat icon="mdi-magnify" />
              </template>
            </q-input>
          </div>
        </div>
      </div>
      <div class="q-pt-md q-pb-sm relative-position">
        <div class="text-h6 text-center q-my-xs">
          Search <q-btn style="position: absolute;right: 10px;">Filter</q-btn>
        </div>
        <div class="text-center">
          <p
            class="q-mb-none text-caption"
            :class="{
              'text-grey-7': !$q.dark.isActive,
              'text-grey-4': $q.dark.isActive
            }"
          >
            1-20 of 1,000 results
          </p>
        </div>
      </div>
    </q-header>
    <q-page-container :class="{ 'bg-grey-2': !$q.dark.isActive }">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "SearchLayout",
  components: {
    HorizontalBtn: () => import("components/Horizontal-btn")
  },
  data() {
    return {
      leftDrawerOpen: false,
      search: "",
      marketOpt: [
        { title: "cloths" },
        { title: "phones" },
        { title: "laptops" },
        { title: "nails" },
        { title: "makeup kit" },
        { title: "shoes" },
        { title: "office tables" }
      ]
    };
  },
  methods: {
    darkMode(val) {
      try {
        this.$q.dark.set(val);

        this.$q.localStorage.set("ebeano-thm", val);
        this.$q.dark.isActive = val;
      } catch (e) {
        console.log("An Unexpected Error Occured");
        // data wasn't successfully saved due to
        // a Web Storage API error
      }
    }
  }
};
</script>
