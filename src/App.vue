<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  created() {
    // Bazed is a key for knowing if the home page data is loaded in session
    // this.loadingDialog = true;

    this.$q.addressbarColor.set('#fff')
    this.$q.dark.set(this.$q.localStorage.getItem("ebeano-thm"));
  },
  watch: {
    "$q.dark.isActive"(val) {
      this.$q.dark.set(this.$q.localStorage.getItem("ebeano-thm"));
      if (this.$q.dark.isActive) {
        this.$q.addressbarColor.set("#1d1d1d");
      } else {
        this.$q.addressbarColor.set("#fff");
      }
    }
  }
};
</script>
