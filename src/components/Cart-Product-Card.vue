<template>
  <div>
    <q-card
      v-if="gridStyle"
      :bordered="bordered"
      :flat="flat"
      :class="contentClass"
    >
      <div class="q-pa-xs" style="height:160px">
        <router-link :to="`/${product.title}`">
          <img
            class="rounded-borders full-width full-height"
            :class="{ card: flat }"
            src="https://ebeanomarket.com/assets/images/banners/slider2.jpg"
          />
        </router-link>
      </div>
      <q-list>
        <q-item>
          <q-item-section top>
            <q-item-label lines="1">
              <span class="text-weight-medium text-body1">
                {{ product.title }}</span
              >
            </q-item-label>
            <q-item-label
              lines="1"
              class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
            >
              <!-- <span class="cursor-pointer">${{  }}</span> -->
              <div class="q-my-sm">
                <span class="text-grey-7 text-caption text-bold">
                  {{ product.price }}
                </span>
              </div>
            </q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-btn
              color="negative"
              round
              flat
              icon="mdi-trash-can-outline"
            ></q-btn>
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator></q-separator>

      <q-card-actions align="between" :class="{ 'q-px-md': $q.screen.gt.sm }">
        <div class="q-my-sm">
          <span class="text-grey-7 text-caption ">
            3x${{ product.price }}
          </span>
          <q-badge
            outline
            class="text-bold"
            color="primary"
            :label="'$' + 3 * product.price"
          />
        </div>
        <q-btn-group spread>
          <q-btn
            :color="$q.dark.isActive ? 'grey-9' : 'white'"
            :text-color="$q.dark.isActive ? 'white' : 'primary'"
            icon="mdi-minus"
          />
          <q-btn
            :color="$q.dark.isActive ? 'grey-9' : 'white'"
            :text-color="$q.dark.isActive ? 'white' : 'primary'"
            disable
            label="1"
          />
          <q-btn
            :color="$q.dark.isActive ? 'grey-9' : 'white'"
            :text-color="$q.dark.isActive ? 'white' : 'primary'"
            icon="mdi-plus"
          />
        </q-btn-group>
      </q-card-actions>
    </q-card>
    <q-card v-else :bordered="bordered" :flat="flat" :class="contentClass">
      <q-list>
        <q-item class="q-px-sm">
          <q-item-section style="padding-right:8px" avatar>
            <router-link :to="`/${product.title}`">
              <q-avatar
                rounded
                :size="
                  $q.screen.lt.sm ? '60px' : $q.screen.lt.md ? '80px' : '100px'
                "
              >
                <img
                  src="https://ebeanomarket.com/assets/images/banners/slider2.jpg"
                />
              </q-avatar>
            </router-link>
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <span
                class="text-weight-medium"
                :class="{ 'text-body1': $q.screen.gt.xs }"
              >
                {{ product.title }}</span
              >
            </q-item-label>
            <q-item-label
              ><div class="q-my-sm">
                <span class="text-grey-7 text-bold text-caption ">
                  {{ product.price }}
                </span>
              </div></q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-btn
              color="negative"
              round
              flat
              icon="mdi-trash-can-outline"
            ></q-btn>
          </q-item-section>
        </q-item>
      </q-list>
      <q-separator></q-separator>
      <q-card-actions align="between" :class="{ 'q-px-md': $q.screen.gt.sm }">
        <div class="q-my-sm">
          <span class="text-grey-7 text-caption ">
            3x${{ product.price }}
          </span>
          <q-badge
            outline
            class="text-bold"
            color="primary"
            :label="'$' + 3 * product.price"
          />
        </div>
        <q-btn-group spread style="min-width:140px">
          <q-btn
            :color="$q.dark.isActive ? 'grey-9' : 'white'"
            :text-color="$q.dark.isActive ? 'white' : 'primary'"
            icon="mdi-minus"
          />
          <q-btn
            :color="$q.dark.isActive ? 'grey-9' : 'white'"
            :text-color="$q.dark.isActive ? 'white' : 'primary'"
            disable
            label="1"
          />
          <q-btn
            :color="$q.dark.isActive ? 'grey-9' : 'white'"
            :text-color="$q.dark.isActive ? 'white' : 'primary'"
            icon="mdi-plus"
          />
        </q-btn-group>
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: true
    },
    "content-class": {
      type: String,
      default: function() {
        if (this.flat == true) {
          return "";
        } else {
          return "card";
        }
      }
    },
    gridStyle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>
