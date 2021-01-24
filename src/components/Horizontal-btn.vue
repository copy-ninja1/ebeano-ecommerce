<template>
  <div class="sub-menu">
    <div class="channel-menu">
      <div
        class="mask mask-left"
        v-if="!$q.dark.isActive"
        style="display: none;"
      ></div>
      <div class="mask mask-right" v-if="!$q.dark.isActive" style></div>
      <div class="list">
        <slot></slot>
        <!-- -->
      </div>
      <!-- <q-btn
        round
        flat
        class="btn-expand"
        :class="`${$q.dark.isActive ? 'text-grey-2' : 'text-dark'}`"
        icon="mdi-filter-variant-plus"
      /> -->
      <!-- <span class="btn-expand"> -->
      <!-- <slot  name="navButton"></slot>

      </span> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.sub-menu {
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 42px;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
  .channel-menu {
    height: 42px;
    background: inherit;
    font-size: 14px;
    font-weight: 700;
    overflow-y: hidden;
    overflow-x: auto;
    // padding-right: 38px;
    position: relative;
    .mask-left {
      display: none;
      left: 0;
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(0, #fff),
        color-stop(100%, rgba(255, 255, 255, 0))
      );
    }
    // .mask-right {
    //   right: 38px;
    //   background: -webkit-gradient(
    //     linear,
    //     right top,
    //     left top,
    //     color-stop(0, #fff),
    //     color-stop(100%, rgba(255, 255, 255, 0))
    //   );
    // }
    .mask {
      width: 40px;
      height: 42px;
      position: absolute;
      z-index: 2;
      top: 0;
    }
    .list {
      position: relative;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      width: auto;
      white-space: nowrap;
    }
    .btn-expand {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
/* Hide scrollbar for Chrome, Safari and Opera */
.list::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.list {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
