<template>
  <q-footer flat class="text-primary lt-md">
    <q-card class="bottom-tab" square>
      <q-tabs
        no-caps
        active-color="primary"
        dense
        indicator-color="transparent"
        class="text-grey"
      >
        <q-route-tab
          :icon="$route.fullPath == '/' ? 'mdi-home' : 'mdi-home-outline'"
          label="home"
          :active-class="$q.dark.isActive ? 'text-purple-1' : 'text-primary'"
          to="/"
          exact
        />
        <q-route-tab
          :icon="$route.fullPath == '/##' ? 'mdi-search-web' : 'mdi-magnify'"
          label="search"
          :active-class="$q.dark.isActive ? 'text-purple-1' : 'text-primary'"
          to="/##"
          exact
        />
        <q-route-tab
          :icon="
            $route.fullPath == '/#' ? 'mdi-account' : 'mdi-account-outline'
          "
          label="Profile"
          :active-class="$q.dark.isActive ? 'text-purple-1' : 'text-primary'"
          to="/#"
          exact
        />
      </q-tabs>
    </q-card>
  </q-footer>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>
<style lang="scss" scoped>
.bottom-tab {
  border-right: none !important;
  border-bottom: none !important;
  border-left: none !important;
}
</style>
