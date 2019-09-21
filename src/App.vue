<template>
  <div id="app">
    <transition name="appstart-fade">>
      <AppStart v-if="start" ref="appStart" @EnterInApp="EnterInApp" :timeout="timeout"/>
    </transition>
    <transition name="app-tabbar-fade">
      <Container :selected="selected" v-if="!start"/>
    </transition>
    <transition name="app-tabbar-fade">
      <Tabbar :selected="selected" @update="UpdtaeSelected" v-if="!start"/>
    </transition>



  </div>
</template>

<script>
  import Container from "./components/container/Container"
  import Tabbar from "./components/tabbar/Tabbar"
  import TitleBar from "./components/home/titlebar/TitleBar"
  import AppStart from "./pages/appstart/AppStart"
  // tslint:disable-next-line:no-duplicate-imports

  export default {
    components: {Container, Tabbar, TitleBar, AppStart},
    data() {
      return {
        selected: 'tab1',
        start: true,
        timeout: 10
      }
    },
    methods: {
      UpdtaeSelected(val) {
        this.selected = val
      },
      EnterInApp(){
        this.timeout = 0
        this.start = false
      }
    },
    mounted() {
      //设置app启动页面跳转
      const time = this.timeout * 1000
      const Interval = setInterval(() => {
        this.timeout--
      }, 1000)

      const Timeout = setTimeout(() => {
        this.start = false;
        clearInterval(Interval)
        clearTimeout(Timeout)
      }, time)
    }
  }
</script>

<style>
  * {
    margin: 0 auto;
  }
  .appstart-fade-enter-active {
    transition: all .5s ease;
  }
  .appstart-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .appstart-fade-enter, .appstart-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }

  .app-tabbar-fade-enter-active {
    transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  /*.app-tabbar-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }*/
  .app-tabbar-fade-enter, .app-tabbar-fade-leave-to{
    transform: translateY(10px);
    opacity: 0;
  }
</style>
