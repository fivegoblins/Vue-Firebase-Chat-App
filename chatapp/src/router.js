import Vue from 'vue'
import Router from 'vue-router'
import PrivateChat from './views/PrivateChat.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: PrivateChat
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
