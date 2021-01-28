<template>
  <div>
    <q-card
      v-if="gridStyle"
      :bordered="bordered"
      :flat="flat"
      :class="contentClass"
    >
      <div class="q-pa-xs" style="height:160px">
        <img
          class="rounded-borders full-width full-height"
          :class="{ card: flat }"
          src="https://ebeanomarket.com/assets/images/banners/slider2.jpg"
        />
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
                <span class="text-grey-7 text-caption ">
                  1x300
                </span>
                <q-badge
                  outline
                  class="text-bold"
                  color="primary"
                  :label="product.price"
                />
              </div>
            </q-item-label>

            <q-item-label>
              <q-btn-group  spread>
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
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <q-card v-else :bordered="bordered" :flat="flat" :class="contentClass">
      <q-list>
        <q-item class="q-px-sm">
          <q-item-section style="padding-right:8px" avatar>
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
                <span class="text-grey-7 text-caption ">
                  1x300
                </span>
                <q-badge
                  outline
                  class="text-bold"
                  color="primary"
                  :label="product.price"
                /></div
            ></q-item-label>
            <q-item-label class="gt-sm">
              <q-btn-group  spread>
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
            </q-item-label>
          </q-item-section>
          <q-item-section class="lt-md" style="padding-left:6px" side>
            <!-- <div class="text-grey-8 q-gutter-xs">
              <q-btn  size="12px" flat dense round icon="delete" />
            </div> -->
            <q-btn-group  spread>
              <q-btn
                
                round
                :color="$q.dark.isActive ? 'grey-9' : 'white'"
                :text-color="$q.dark.isActive ? 'white' : 'primary'"
                size="sm"
                icon="mdi-minus"
              />
              <q-btn
                
                round
                :color="$q.dark.isActive ? 'grey-9' : 'white'"
                :text-color="$q.dark.isActive ? 'white' : 'primary'"
                size="sm"
                disable
                label="1"
              />
              <q-btn
                
                round
                :color="$q.dark.isActive ? 'grey-9' : 'white'"
                :text-color="$q.dark.isActive ? 'white' : 'primary'"
                size="sm"
                icon="mdi-plus"
              />
            </q-btn-group>
          </q-item-section>
        </q-item>
      </q-list>
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
