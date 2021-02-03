<template>
  <q-page>
    <div class="row justify-center items-center" style="height:100vh">
      <div class="col-xs-12 col-md-5">
        <q-card  :class="{
            card: $q.screen.gt.sm,
            'force-full': !$q.screen.gt.sm
          }" flat class="q-px-md">
          <div style="margin: auto; width: fit-content;">
            <router-link to="/">
                <img style="width:120px" src="/ebeano-logo.png" alt="logo" />
            </router-link>
          </div>
          <h3
            class="text-h5 text-grey-7 text-weight-regular text-center q-mb-sm q-mt-sm"
          >
            Login
          </h3>

          <login :asDialog="false" />
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  components: {
    login: () => import("components/Entrances/Login")
  },
  meta() {
    return {
      title: "Login"
    };
  },
  data() {
    return {
   
    };
  },
  methods: {},
  mounted() {},
  created() {
    // if (!_.isEmpty(this.me)) {
    //   this.$router.push("/");
    // }
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
