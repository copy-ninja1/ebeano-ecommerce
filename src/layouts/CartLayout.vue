<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      :reveal="$q.screen.gt.sm"
      class=" text-grey-9"
      :class="{ 'bg-white': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }"
    >
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />
        <q-btn
          flat
          class="lt-md"
          round
          dense
          to="/search"
          :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-dark'}`"
          icon="mdi-magnify"
        />
        <q-space class="lt-md"></q-space>

        <router-link to="/">
          <img
            style="width:100px"
            src="https://ebeanomarket.com/assets/images/ebeano-logo.png"
        /></router-link>
        <q-space class="gt-sm"></q-space>

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
              <q-btn round dense to="/search" flat icon="mdi-magnify" />
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
          icon="mdi-shopping-outline"
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

      <div class="row justify-center lt-md" v-if="$q.screen.lt.md">
        <div class="q-pa-xs q-gutter-xs">
          <!-- <div class="col" v-for="btn in smBtn" :key="btn.label"> -->
          <q-btn
            :color="$q.dark.isActive ? 'purple-1' : 'primary'"
            flat
            v-for="btn in smBtn"
            :key="btn.label"
            padding="sm"
            no-caps
          >
            <div>
              <q-icon :name="btn.icon"></q-icon>
              <p class="q-mb-none">{{ btn.label }}</p>
            </div>
          </q-btn>
        </div>
      </div>
    </q-header>

    <q-page-container
      :class="{ 'bg-grey-2': !$q.dark.isActive, 'q-pt-xxxl': $q.screen.gt.sm }"
    >
      <router-view />
      <q-page-sticky expand position="top" class="gt-sm layout-shadow">
        <q-toolbar class="bg-purple-5 text-white">
          <!-- <div class="row justify-center">
            <div class="col-md-11">-->

          <div class="row justify-center full-width">
            <div class="q-py-sm q-gutter-sm">
              <q-btn
                color="primary"
                rounded
                unelevated
                no-caps
                style="min-width:120px"
                :label="n"
                v-for="n in btn"
                :key="n"
              />
            </div>
          </div>
          <!--  </div>
          </div> -->
        </q-toolbar>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "CartLayout",
  data() {
    return {
      leftDrawerOpen: false,
      search: "",
      btn: [
        "Computers",
        "Fashion",
        "Shoes",
        "phones",
        "Home and Kitchen",
        "Baby toys",
        "sports",
        "Other Categories"
      ],
      smBtn: [
        { icon: "mdi-layers-triple", label: "Browse All" },
        { icon: "mdi-laptop", label: "Computers" },
        { icon: "mdi-tshirt-crew", label: "Fashion" },
        { icon: "mdi-shoe-formal", label: "Shoes" },
        { icon: "mdi-weight-lifter", label: "sports" }
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
