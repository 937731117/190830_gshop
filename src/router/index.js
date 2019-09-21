import Vue from 'vue'
import Router from 'vue-router'
import AppStart from "../pages/appstart/AppStart";
import App from "../App";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/app'
    },
    {
      path:'/app',
      component:App
    }
  ]
})
