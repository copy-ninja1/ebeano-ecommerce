<template>
  <div>
    <q-card flat class="row q-mb-sm" v-for="a in 4" :key="a">
      <div class="col-xs-2 col-sm-1">
        <div class="circle shadow-1 bg-green">
          <span class="initials">M</span>
        </div>
      </div>
      <q-card-section class="col">
        <p
          class="text-weight-bold  q-pa-none q-ma-none"
          :class="{
            'text-grey-9 ': !$q.dark.isActive,
            'text-grey-1': $q.dark.isActive
          }"
        >
          Iwuala chinenye
        </p>
        <div class="column">
          <div class="flex">
            <q-rating
              v-model="ratedModel"
              size="1.2em"
              color="grey"
              class="q-mr-xs"
            />
            <span
              class="text-caption q-mt-xs"
              :class="{
                'text-grey-8  ': !$q.dark.isActive,
                'text-grey-1': $q.dark.isActive
              }"
              >August 29, 2019</span
            >
          </div>
        </div>
        <p
          class="text-weight-light text-body2 q-pt-xs q-my-xs"
          :class="{
            'text-grey-10 ': !$q.dark.isActive,
            'text-grey-1': $q.dark.isActive
          }"
        >
          Great work This app is what most nigeria universities needs Atleast
          make things digitalized and easy
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ratedModel: 4
    };
  }
};
</script>
<style lang="scss" scoped>
// :root {
//   --avatar-size: 18rem;
//   /* change this value anything, e.g., 100px, 10rem, etc. */
// }
$avatar-size: 48px;

.circle {
  border-radius: 50%;
  height: $avatar-size;
  text-align: center;
  width: $avatar-size;
}

.initials {
  font-size: calc(#{$avatar-size}/ 2); /* 50% of parent */
  line-height: 1;
  color: rgba(253, 253, 253, 0.8);
  position: relative;
  top: calc(#{$avatar-size} / 4); /* 25% of parent */
}
</style>
