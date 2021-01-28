<template>
  <router-link :to="'/prodCategory/'+product.title">
    <q-card flat bordered class="q-pa-none">
      <div class="q-pa-xs relative-position rounded-borders" style="height:200px;width:100%;">
        <q-img :src="url" :ratio="1" class="rounded-borders" style="height: 200px; width:100%">
          <!-- <template v-slot:loading>
            <div class="absolute-full flex flex-center text-white" v-randColors>
              <q-spinner color="white" size="0.5em" :thickness="2" />
            </div>
          </template>
          <template v-slot:error>
            <div class="absolute-full flex flex-center text-white" v-randColors></div>
          </template> -->
        </q-img>
      </div>
      <q-card-section class="q-pb-xs">
        <div class="text-body2 text-grey-9 text-weight-light">{{product.title}}{{product.id}}</div>
        <!-- <div class="text-caption">{{product.author}}</div> -->
        <slot name="action"></slot>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-actions class="q-py-none">
        <span>
          <Span>Price -</Span>$400.00
        </span>
        <q-space></q-space>
        <!-- <q-btn round color="primary" flat icon="mdi-thumb-up-outline"></q-btn> -->
        <q-separator vertical />
        <q-btn flat round icon="mdi-dots-vertical">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable @click="copyLink" v-close-popup>
                <q-item-section>
                  <span>
                    <q-icon size="sm" color="grey-5" name="mdi-content-copy" class="q-pr-xs" />Copy link
                  </span>
                </q-item-section>              </q-item>
              <q-separator />

              <q-item clickable v-close-popup>
                <q-item-section>
                  <span>
                    <q-icon size="sm" color="blue-9" name="mdi-facebook" class="q-pr-xs" />face book
                  </span>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <span>
                    <q-icon size="sm" color="blue" name="mdi-twitter" class="q-pr-xs" />Twitter
                  </span>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-card-actions>
    </q-card>
  </router-link>
</template>
<script>
export default {
  props: {
    product: {
      type: Object
      // required: true
    }
  },
  data() {
    return {
      url: null
    };
  },
  methods: {
    toggle() {
      this.url =
        this.url === null
          ? "https://placeimg.com/500/300/nature?t=" + Math.random()
          : null;
    }
  },
  mounted() {
    this.toggle();
  }
};
</script>
<style scoped>
</style>
