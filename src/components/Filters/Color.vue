<template>
  <div>
    <div class="q-pa-md">
      <div class="q-gutter-xs">
        <!-- <q-chip
          clickable
          :selected.sync="desert.red"
          color="teal"
          class="filter_color"
          text-color="white"
        />
        <q-chip :selected.sync="desert.blue" class="filter_color" color="blue" text-color="white" />
        <q-chip
          :selected.sync="desert.yellow"
          class="filter_color"
          color="yellow"
          text-color="white"
        />
        <q-chip
          :selected.sync="desert.green"
          class="filter_color"
          color="green"
          text-color="white"
        />
       --> <q-chip
          class="filter_color"
          color="black"
          text-color="white"
        /> 
           <q-chip
          v-for="(color,name,index) of colors"
          :key="index"
          clickable
          :selected.sync="colors.name"
          :color="name"
          :id="name"
          class="filter_color"
          text-color="white"
        />
      </div>

      <div class="q-mt-sm">Your pick: {{ selection }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: {
        red: false,
        blue: false,
        yellow: false,
        green: false,
        black: false
      }
    };
  },

  computed: {
    selection() {
      return Object.keys(this.colors)
        .filter(type => this.colors[type] === true)
        .join(", ");
    }
  }
};
</script>
<style lang="scss" scoped>
.filter_color {
  vertical-align: middle;
  border-radius: 50%;
  outline: 0;
  position: relative;
  height: 2em;
  width: 2em;
  margin: 4px;
  background: #e0e0e0;
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  padding: 0.5em 0.5em;
}

// .huded-chip {
//   position: relative;
//   height: 45px;
//   width: 45px;
//   // padding-right: 10px;
//   border-radius: 100%;
// }
</style>