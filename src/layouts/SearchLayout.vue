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
          Search
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
      <div class="q-pt-md" :class="{ 'q-pa-sm': $q.screen.gt.sm }">
        <horizontal-btn>
          <q-btn
            no-caps
            :color="$q.dark.isActive ? 'grey-9' : 'white'"
            class="q-mx-sm"
            :text-color="$q.dark.isActive ? 'white' : 'grey-7'"
            outline
            rounded
            v-for="(opt, index) in marketOpt"
            :key="index"
            >{{ opt.title }}</q-btn
          >
        </horizontal-btn>
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
        { title: "Ebeano Market Place" },
        { title: "Ebeano Artisans" },
        { title: "Ebeano Real Estate" },
        { title: "Ebeano Utility" },
        { title: "Ebeano Automobile" },
        { title: "Ebeano Bookings" }
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
