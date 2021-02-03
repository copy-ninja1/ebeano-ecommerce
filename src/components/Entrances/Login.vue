<template>
  <q-form class="q-gutter-md" @submit="login">
    <q-input
      type="email"
      outlined
      v-model.trim="emailAddress"
      placeholder="Email*"
      dense
      lazy-rules
      :rules="emailRules"
    />
    <q-input
      type="password"
      outlined
      v-model="password"
      dense
      placeholder="Password*"
      lazy-rules
      :rules="passwordRules"
    />

    <div>
      <q-btn
        label="Login"
        type="submit"
        :loading="loading"
        color="primary"
        class="full-width"
      />
    </div>
    <p class="text-center text-grey-9 text-weight-light">OR</p>
    <div>
      <q-btn
        label="Create Account"
        :to="!asDialog ? '/account/signup' : ''"
        outline
        @click="asDialog ? nextpanel() : ''"
        color="primary"
        class="full-width"
      />
    </div>
    <div>
      <!-- <q-btn
            color="primary"
            placeholder="FaceBook"
            type="a"
            href="http://localhost:1337/api/v1/auth/facebook"
          ></q-btn> -->
      <!--@click="facebookAuth()"
           type="a"
            href="http://localhost:1337/api/v1/auth/facebook"-->
    </div>
    <div>
      <router-link to="/forgot-password">
        <p class="text-caption q-ma-md">Forgotten Password?</p>
      </router-link>
    </div>
  </q-form>
</template>
<script>
export default {
  props: {
    asDialog: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      emailAddress: "", //emmajnr1000@gmail.com
      password: "", //@A1234567
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [v => !!v || "Password is required"],
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("account/login", {
          email: this.emailAddress,
          password: this.password
        })
        .then(({ data }) => {
          console.log("data :", data);
          let jwt = data.payload.token;
          if (jwt)
            this.$store.dispatch("account/saveJwtSecret", jwt).then(() => {
              this.$q.notify({
                message: data.description,
                color: "positive",
                position: "top"
              });

              if (this.$route.query.redirect) {
                // console.log("redirected ::", this.$route.query.redirect);
                this.$router.push(this.$route.query.redirect);
              } else {
                this.$router.push("/dashboard");
              }
            });
        })
        .finally(() => {
          this.loading = false;
        });
    }

    // nextpanel() {
    //   if (this.asDialog) {
    //     // this.$store.commit("SET_PLEASE_LOGIN_PANEL", "signup");
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
