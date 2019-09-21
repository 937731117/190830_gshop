<template>
  <div>
    <img src="../../../static/img/start.jpg" alt="">
    <span @click="EnterIn"  @mouseenter="InApp"   :class="{checkin:check}">进入{{timeout}}s</span>
  </div>
</template>

<script>
  export default {
    name: "AppStart",
    data(){
      return{
        check:false
      }
    },
    props:['timeout'],
    methods:{
      EnterIn(){
        this.$emit('EnterInApp')
      },
      InApp(){
        this.check = true
      }
    },
    mounted(){

    },
    watch:{
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }

  span {
    z-index: 99999;
    position: absolute;
    width: 3rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-family: Arial;
    color: white;
    border-radius: 50%;
    top: 3rem;
    right: 1.5rem;
    background-color:darkgray;
    opacity: .2;
    border: 0.1rem black solid;
    box-shadow: 1px 2px 3px 4px #ffffff;
  }

  .checkin{
    box-shadow: 1px 2px 3px 4px #ffffff inset;
  }
</style>
