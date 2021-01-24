<template>
  <div>
    <div class="q-px-sm">
      <h5 class="q-my-xs text-weight-bold">
        {{ groupName }}
        <!--           :to="`${routeName}/seemore`"
 -->
        <router-link
          tag="span"
          :to="$route.path+'#'"
          class="float-right q-pt-sm text-grey-6 text-subtitle2 cursor-pointer text-weight-bold"
          >see all</router-link
        >
      </h5>
    </div>

    <div class="row relative">
      <!--  -->
      <!-- <router-link
          :to="category.title == 'music' ||category.title == 'Music' ?'/genrebrowse':'post/'+category.title"
      >-->
      <div class="slider">
        <div
          class="item"
          :style="
            `width:${
              $q.screen.width < 300
                ? 'calc(100vw/2)'
                : $q.screen.width < 400
                ? 'calc(100vw/2.3)'
                : $q.screen.width == 411
                ? 'calc(100vw/2.5)'
                : $q.screen.width < 735
                ? 'calc(100vw/3.4)'
                : $q.screen.width < 1000
                ? 'calc(100vw/4.4)'
                : 'calc(100vw/5.6)'
            }`
          "
          v-for="(item, indx) in items"
          :key="indx"
        >
          <product-card :flat="false"></product-card>
          <!-- </router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "./Product-card.vue";
export default {
  components: { ProductCard },
  props: {
    groupName: { type: String, required: true },
    routeName: {
      type: String,
      // required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
// horizontal slider
$size: 200px;
$gutter: 20px;

.slider {
  width: 100%;
  margin: auto;
  display: flex; // Force items to fit horizontally, don't wrap
  overflow-x: auto; // Let user slide if items can't fit
  overflow-y: hidden; // Avoid scrollbar on IE
  -webkit-overflow-scrolling: touch;
  padding: $gutter/2;
  height: fit-content;

  &:before,
  &:after {
    content: "";
    flex: 1 0 auto; // Trick to fake center alignment when the screen is large enough
    display: inline-block; // Force IE to set flex on IE 10
  }

  &:after {
    width: 10px; // Fix flexbox bug, .slider's right padding not taken into account
  }
}
.slider::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent;
  display: none;
}

.item {
  display: inline-block; // Force IE to set flex on IE 10
  margin: 5px;
  counter-increment: count;
  flex: 0 0 auto; // Items can't shrink or grow automatically
  display: flex;
  align-items: center;
  justify-content: center;

  div:not(.q-avatar) {
    width: 100%;
    border-radius: inherit;
  }
  a {
    width: 100%;
  }
}
</style>
