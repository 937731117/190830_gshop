<template>
  <mt-swipe class="banner" :auto="4000" style="height: 13rem">
    <mt-swipe-item v-for="(banner,index) in banners" :key="index"><img  v-lazy="banner" alt="loading"></mt-swipe-item>
<!--    <mt-swipe-item><img v-lazy="banners.banner2" alt=""></mt-swipe-item>-->
<!--    <mt-swipe-item><img v-lazy="banners.banner3" alt=""></mt-swipe-item>-->
  </mt-swipe>
</template>

<script>
  import {BANNERS} from "../../config";

  export default {
    name: "Banner",
    data(){
      return{
        banners: BANNERS
      }
    }
  }
</script>

<style scoped>
  .banner {
    margin: .5rem 0 .5rem 0;
  }
</style>
