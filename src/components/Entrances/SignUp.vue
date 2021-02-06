<template>
  <q-form class="q-gutter-sm" @submit="submiteSignUp">
    <!-- <div class="custom-shadow  q-px-sm"> -->
    <!-- </div> -->
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
    <q-input
      type="password"
     outlined
      v-model="confirmPassword"
      dense
      placeholder="confirmPassword*"
      lazy-rules
      :rules="confirmPasswordRules"
    />
    <div>
      <q-toggle
        v-model="accept"
        label="I have agreed to the terms and conditions of services."
      />&nbsp;<router-link to="//terms.ebeano.com">
        <span class="text-primary">ebeano T&C</span>
      </router-link>
    </div>
    <div>
      <q-btn
        label="Sign Up"
        type="submit"
        :loading="loading"
        color="primary"
        class="full-width"
      />
    </div>
    <div>
      <p class="text-caption q-ma-md">
        Already a member?
        <q-btn
          flat
          rounded
                  color="primary"

          :to="!asDialog ? '/account/login' : ''"
          @click="asDialog ? nextpanel() : ''"
          class="pa-1"
          >LOGIN</q-btn
        >
      </p>
    </div>
  </q-form>
</template>
<script>
export default {
  components: {
    signUp: () => import("components/Entrances/SignUp")
  },
  props: {
    asDialog: {
      type: Boolean,
      default: true
    }
  },
  meta() {
    return {
      title: "Sign up"
    };
  },
  data() {
    return {
      emailAddress: "",
      password: "",
      confirmPassword: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 5) || "Password must have 5+ characters",
        v => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
        v => /(?=.*\d)/.test(v) || "Must have one number",
        v => /([!@$%])/.test(v) || "Must have one special character [!@#$%]"
      ],
      confirmPasswordRules: [
        v => v === this.password || "The password confirmation does not match."
      ],
      accept: false,
      loading: false,
      gender: ""
    };
  },
  methods: {
    submiteSignUp() {
      this.loading = true;
      this.$store
        .dispatch("account/signup", {
          email: this.emailAddress,
          password: this.password,
          confirm_password: this.confirmPassword
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
            });
        })
        .finally(() => {
          this.loading = false;
        });
    }
    // nextpanel() {
    //   if (this.asDialog) {
    //     this.$store.commit("SET_PLEASE_LOGIN_PANEL", "login");
    //   }
    // }
  }
};
</script>
