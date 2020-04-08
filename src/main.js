// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
//import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// 20.04.07 bulma로 변경
// import Bulma from '../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = true
// Vue.use(Buefy)
// Vue.use(Bulma)
// require('/assets/main.scss')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
