<template>
  <!-- tabcontainer -->
  <mt-tab-container class="page-tabbar-container container" v-model="selected">
    <mt-tab-container-item id="tab1">
      <TitleBar :title="title" :back="false"/>
      <Banner/>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab2">
      <TitleBar :title="title" :back="false"/>
      <Tab2 v-for="(n,index) in 5" :key="index" :title="`订单`  + n"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab3">
      <TitleBar :title="title" :back="false"/>
      <mt-cell v-for="(n,index) in 7" :key="index" :title="'发现 ' + n"/>
    </mt-tab-container-item>
    <mt-tab-container-item id="tab4">
      <TitleBar :title="title" :back="false"/>
      <div class="page-part">
        <!-- cell -->
        <mt-cell v-for="(n,index) in 12" :key="index" :title="'我的 ' + n"/>
      </div>
      <router-link to="/">
        <!-- button -->
        <mt-button type="danger" size="large">退出</mt-button>
      </router-link>
    </mt-tab-container-item>
  </mt-tab-container>
</template>

<script>
  import Banner from "../home/banner/Banner";
  import TitleBar from "../home/titlebar/TitleBar"
  import {TABBARS} from "../config"
  import Tab2 from "../tab2/Tab2";

  export default {
    name: "Container",
    data(){
      return{
        back: '/',
        title: '首页',
        tab2List: ""
      }
    },
    components: {Tab2, Banner,TitleBar},
    props: ['selected'],
    watch:{
      selected(newVal,oldVal){
        switch (newVal) {
          case 'tab1':this.title = TABBARS.tab1; break
          case 'tab2':this.title = TABBARS.tab2; break
          case 'tab3':this.title = TABBARS.tab3; break
          case 'tab4':this.title = TABBARS.tab4; break
        }
      }
    }
  }
</script>

<style scoped>
.container{

}
</style>
