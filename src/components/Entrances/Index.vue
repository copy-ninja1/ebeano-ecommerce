<template>
  <q-dialog
    :position="$q.screen.gt.sm?'standard':'bottom'"
    v-model="pleaseLoginDialog"
  >
    <q-card :style="$q.screen.lt.md?'':'width:500px;max-width:80vw;'">

      <slot></slot>
      <q-tab-panels
        v-if="$q.screen.gt.sm"
        v-model="panel"
        animated
        swipeable
        infinite
      >
        <q-tab-panel name="login">
          <login></login>
        </q-tab-panel>

        <q-tab-panel name="signup">
          <signUp></signUp>
        </q-tab-panel>
      </q-tab-panels>
      <div v-else>
        <q-btn
          color="primary"
          label="Login"
          to="/account/login"
          class="q-ma-sm"
          style="width:45%"
        ></q-btn>
        <q-btn
          color="primary"
          outline
          to="/account/signup"
          class="q-ma-sm"
          style="width:45%"
          label="Sign up"
        ></q-btn>

      </div>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  components: {
    signUp: () => import('components/Entrances/SignUp'),
    login: () => import('components/Entrances/Login')

  },
  data () {
    return {
    }
  },
  computed: {
    panel () {
      return this.$store.state.pleaseLoginDialog.panel;
    },
    pleaseLoginDialog: {
      get () {
        return this.$store.state.pleaseLoginDialog.state;
      },
      set () {
        this.$store.commit("SET_PLEASE_LOGIN", {
          state: false,
          // panel: 'login',
          userName: ' '
        });
      }
    },
  }
}
</script>
