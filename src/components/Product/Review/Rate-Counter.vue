<template>
  <div>
    <div class="q-pa-md bg-grey-3 rounded-borders border">
      <div class="q-gutter-y-md column">
        <div class="flex">
          <span class="text-h3 text-grey-9 text-weight-thin q-mt-xs">5.0</span>
          <q-rating
            v-model="ratingModel"
            size="2em"
            color="grey"
            class="q-mx-md"
            :color-selected="ratingColors"
          />
        </div>
      </div>
    </div>
    <span class="flex q-mt-sm">
      5 stars
      <q-linear-progress
        stripe
        rounded
        size="10px"
        style="width:calc(100% - 135px);margin-top:6.5px;"
        :value="progress2"
        track-color="grey-4"
        color="orange"
        class="q-mx-md shadow-1"
      />
      <q-badge color="white" class="shadow-1" text-color="accent" :label="progressLabel2" />
    </span>
    <span class="flex q-mt-sm">
      4 stars
      <q-linear-progress
        stripe
        rounded
        size="10px"
        style="width:calc(100% - 135px);margin-top:6.5px;"
        :value="progress2"
        track-color="grey-4"
        color="orange"
        class="q-mx-md shadow-1"
      />
      <q-badge color="white" class="shadow-1" text-color="accent" :label="progressLabel2" />
    </span>
    <span class="flex q-mt-sm">
      3 stars
      <q-linear-progress
        stripe
        rounded
        size="10px"
        style="width:calc(100% - 135px);margin-top:6.5px;"
        :value="progress2"
        color="orange"
        track-color="grey-4"
        class="q-mx-md shadow-1"
      />
      <q-badge color="white" class="shadow-1" text-color="accent" :label="progressLabel2" />
    </span>
    <span class="flex q-mt-sm">
      2 stars
      <q-linear-progress
        stripe
        rounded
        size="10px"
        style="width:calc(100% - 135px);margin-top:6.5px;"
        :value="progress2"
        color="orange"
        track-color="grey-4"
        class="q-mx-md shadow-1"
      />
      <q-badge color="white" class="shadow-1" text-color="accent" :label="progressLabel2" />
    </span>
    <span class="flex q-mt-sm">
      1 stars
      <q-linear-progress
        stripe
        rounded
        size="10px"
        style="width:calc(100% - 135px);margin-top:6.5px;"
        :value="progress2"
        color="orange"
        track-color="grey-4"
        class="q-mx-md shadow-1"
      />
      <q-badge color="white" class="shadow-1" text-color="accent" :label="progressLabel2" />
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      progress2: 0.9,
      ratingModel: 4,
      ratingColors: [
        "orange-2",
        "orange-4",
        "orange-6",
        "orange-8",
        "orange-10"
      ]
    };
  },
  computed: {
    progressLabel1() {
      return (this.progress1 * 100).toFixed(2) + "%";
    },

    progressLabel2() {
      return (this.progress2 * 100).toFixed(2) + "%";
    }
  }
};
</script>