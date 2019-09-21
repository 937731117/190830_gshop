<template>
  <mt-header class="title-bar" :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back" v-if="back"></mt-button>
    </router-link>
    <mt-button icon="more" slot="right" @click="handleMenu"></mt-button>
  </mt-header>

</template>

<script>
  export default {
    name: "TitleBar",
    props: ['title', 'back'],
    methods: {
      handleMenu() {
        console.log("aaa")
      }
    }
  }
</script>

<style scoped>
  .title-bar {
    height: 3rem;
    font-size: 16px;
    background-color: rebeccapurple;
  }
</style>
