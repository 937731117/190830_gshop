<template>
  <mt-tabbar v-model="sele">
    <mt-tab-item id="tab1">
      <img slot="icon" :src="sele == 'tab1' ? this.tabbarsImg.tab1[0] : this.tabbarsImg.tab1[1]">
      {{tabbars.tab1}}
    </mt-tab-item>
    <mt-tab-item id="tab2">
      <img slot="icon" :src="sele == 'tab2' ? this.tabbarsImg.tab2[0] : this.tabbarsImg.tab2[1]">
      {{tabbars.tab2}}
    </mt-tab-item>
    <mt-tab-item id="tab3">
      <img slot="icon" :src="sele == 'tab3' ? this.tabbarsImg.tab3[0] : this.tabbarsImg.tab3[1]">
      {{tabbars.tab3}}
    </mt-tab-item>
    <mt-tab-item id="tab4">
      <img slot="icon" :src="sele == 'tab4' ? this.tabbarsImg.tab4[0] : this.tabbarsImg.tab4[1]">
      {{tabbars.tab4}}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  import {TABBARS,TABBARS_IMG} from "../config";

  export default {
    name: "Tabbar",
    data(){
      return{
        sele: this.selected,
        tabbars: TABBARS,
        tabbarsImg: TABBARS_IMG
      }
    },
    props: ['selected'],
    watch: {
      sele: function (val, oldVal) {
        this.$emit('update',this.sele)
        console.log(this.tabbarsImg.tab4[0])
      }
    }
  }
</script>

<style scoped>

</style>
