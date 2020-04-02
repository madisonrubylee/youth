/* eslint-disable standard/object-curly-even-spacing */

import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main/main.vue'

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(Router)

const NotFound = { template: `<div> 404 </div>`}

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'main', component: main},
    { path: '*', component: NotFound }
  ]
})

export default router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HeaderComponent',
//       component: HeaderComponent
//     }
//   ]
// })
