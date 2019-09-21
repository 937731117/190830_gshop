// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// tslint:disable-next-line:no-multi-spaces
import store from  './store'
import { $ } from 'jquery'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// tslint:disable-next-line:no-duplicate-imports
import { Tabbar, TabItem, Header, Swipe, SwipeItem } from 'mint-ui'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/error.jpg',
  loading: './static/loading.gif',
  attempt: 1
})
Vue.use(ElementUI)
Vue.use(Mint)

/* eslint-disable no-new */
// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
