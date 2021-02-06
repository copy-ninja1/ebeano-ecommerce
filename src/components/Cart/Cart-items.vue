<template>
  <div>
    <div class="gt-sm">
      <div class="cart_box bg-white shadow-4 rounded-borders q-pa-sm text-subtitle1">
        <div class="product_box">
          <span>Items Details</span>
        </div>
        <div class="quantity_box">
          <span>Quantity</span>
          <span>Item Price</span>
        </div>
        <div class="action_box">
          <span>Action</span>
        </div>
      </div>
      <div class="q-mt-sm shadow-4 rounded-borders q-pa-sm">
        <div class="cart_box bg-white text-subtitle1 q-mb-xs" v-for="prod in 5" :key="prod">
          <div class="product_box flex">
            <!-- <q-img src="../statics/Flower gold.jpg" :ratio="1" style="max-width: 100%; height: 200px;" /> -->
            <img
              src="../../statics/Flower gold.jpg"
              class="q-pa-xs"
              alt
              style="width: 100px; height: 100px;"
            />
            <h5 class="q-my-none q-pl-sm text-subtitle1">Rosy J Aster</h5>
          </div>
          <div class="quantity_box">
            <span>30</span>
            <span>$50,000</span>
          </div>
          <div class="action_box">
            <span>
              <q-icon name="mdi-close"></q-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="lt-md">
      <q-list class="rounded-borders border q-mb-xs" style="width: 100%;" v-for="a in 6" :key="a">
        <q-item class="q-pa-none">
          <q-item-section avatar class="q-pa-none relative-position">
            <!-- <q-avatar square> -->
            <img
              src="https://cdn.quasar.dev/img/boy-avatar.png"
              class="pa-2"
              style="width:100px;height:100px;"
            />
            <!-- </q-avatar> -->
          </q-item-section>
          <q-item-section>
            <p class="text-h6 text-grey-7 q-mb-xs">Manifestor</p>
            <p class="text-grey-7 q-mb-xs">fgfurur</p>
          </q-item-section>
          <q-item-section avatar side top class="q-pl-xs" style="min-width:20px">
            <q-avatar>
              <q-btn flat round color="black" icon="mdi-close" />
            </q-avatar>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// cart header
.cart_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.product_box {
  position: relative;
  width: 50%;
}
.quantity_box {
  width: 35%;
}
.action_box {
  text-align: right;
  width: 15%;
}
.quantity_boxi > span:first-child {
  text-align: center;
}

.quantity_box > span {
  width: 50%;
}
.cart_box span {
  color: #4a4a4a;
  display: inline-block;
}
// cart product
.cart_box:not(:last-child) > div {
  border-bottom: 0.0625rem solid #e8e8e8;
}
</style>