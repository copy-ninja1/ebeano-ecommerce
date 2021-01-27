<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class=" text-grey-9"
      :class="{ 'bg-white': !$q.dark.isActive, 'bg-dark': $q.dark.isActive }"
    >
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />
        <q-btn
          flat class="lt-md"
          round
          dense
          to="/search"
          :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-dark'}`"
          icon="mdi-magnify"
        />
        <q-space  class="lt-md"></q-space>

        <router-link to="/">
          <img
            style="width:100px"
            src="https://ebeanomarket.com/assets/images/ebeano-logo.png"
        /></router-link>
        <q-space  class="gt-sm"></q-space>

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


    <q-page-container :class="{ 'bg-grey-2': !$q.dark.isActive }">
      <router-view />
    </q-page-container>
    <bottom-tab v-if="$route.path.split('/').length < 3"></bottom-tab>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import bottomTab from "components/Bottom-Tab";
const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev"
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework"
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev"
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev"
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev"
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev"
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink, bottomTab },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      search: ""
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
