<template>
  <!--  -->
  <q-card class="my-card" flat bordered>
    <router-link :to="`/post/${product.category}/${snakeCase(product.title)}`">
      <q-card-section horizontal class="q-pt-xs items-start justify-between">
        <q-card-section class="col-8 q-pa-none">
          <q-list >
            <q-item class="q-pa-xs">
              <q-item-section>
                <q-item-label header lines="4" class="pa-1">{{product.title}}</q-item-label>
                <!-- <q-item-label caption lines="2">{{post.description}}</q-item-label> -->
              </q-item-section>
            </q-item>
          </q-list>
          <q-separator />

          <q-card-actions class="py-0">
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
                    </q-item-section>
                  </q-item>
                  <q-separator />

                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <span>
                        <q-icon size="sm" color="blue-9" name="mdi-facebook" class="q-pr-none" />face book
                      </span>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <span>
                        <q-icon size="sm" color="blue" name="mdi-twitter" class="q-pr-none" />Twitter
                      </span>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-actions>
        </q-card-section>

        <!-- <div class="text-h5 q-mt-sm q-mb-xs">{{`Title `.repeat(5)}}</div> -->
        <q-card-section class="col-4 flex justify-end q-pa-xs">
          <q-img
            class="rounded-borders"
            style="height:150px;width:100%"
            :src="'https://placeimg.com/500/300/arch?t=' + Math.random()"
          >
            <!-- <template v-slot:loading>
              <div class="absolute-full flex flex-center text-white" v-randColors>
                <q-spinner color="white" size="0.8em" :thickness="2" />
              </div>
            </template>
            <template v-slot:error>
              <div class="absolute-full flex flex-center text-white" v-randColors></div>
            </template> -->
          </q-img>
        </q-card-section>
      </q-card-section>
    </router-link>
  </q-card>
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
    copyLink() {
      // this one overrides some of the original
      // options of the "copy" registered type
      this.$q.notify({
        type: "copy",
        icon: "contactless",
        message: `Link has been copyed to clip board`,
        color: "primary"
      });
    }
  },
  mounted() {}
};
</script>
<style scoped>
.placeHolder_image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
