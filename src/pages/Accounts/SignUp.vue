<template>
  <q-page>
    <div class="row items-center justify-center" style="height:100vh">
      <div class="col-xs-12 col-md-5">
        <q-card
          flat
          class="q-px-md"
          :class="{
            card: $q.screen.gt.sm,
            'force-full': !$q.screen.gt.sm
          }"
        >
          <q-card-section>
            <div class="text-center q-my-sm">
              <h1 class="text-h4">Welcome to Ebeano</h1>
              <p class="text-body1 text-grey-7">
                Join millions of Buyers<br />
                in the ebeano market to experience life
              </p>
            </div>
            <div style="margin: auto; width: fit-content;">
              <router-link to="/">
                <img style="width:120px" src="/ebeano-logo.png" alt="logo" />
              </router-link>
            </div>
          </q-card-section>
          <sign-up :asDialog="false"></sign-up>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  components: {
    signUp: () => import("components/Entrances/SignUp")
  },
  meta() {
    return {
      title: "Sign up"
    };
  },
  data() {
    return {
      userName: "a",
      emailAddress: "a@a.com",
      password: "123",
      accept: false,
      loading: false
    };
  },
  methods: {
    signUp() {
      this.loading = true;
      // this.$store
      //   .dispatch("user/REGISTER", {
      //     userName: this.userName,
      //     emailAddress: this.emailAddress,
      //     password: this.password
      //   })
      //   .then(d => {
      //     this.loading = false;
      //   });
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
