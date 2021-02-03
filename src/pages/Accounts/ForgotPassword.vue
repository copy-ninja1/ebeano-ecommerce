<template>
  <q-page>
    <div class="q-pa-md q-ma-md" style="max-width:400px; margin: 0 auto;">
      <h3 class="text-h5 text-grey-7 text-weight-regular text-center q-mb-xl">
        Recover Password
      </h3>
      <q-card flat>
        <q-form class="q-gutter-md">
          <q-input
            input-class="custom-shadow q-px-sm"
            type="email"
            v-model="email"
            borderless
            standout
            placeholder="Your Email*"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please enter email']"
          />

          <div>
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              class="full-width"
            />
          </div>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  meta() {
    return {
      title: "Forgot Password"
    };
  },
  data() {
    return {
      name: "",
      email: ""
    };
  }
};
</script>
