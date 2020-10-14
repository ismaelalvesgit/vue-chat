import Vue from 'vue'
import VueRouter from 'vue-router'
import SingIn from './views/SingIn.vue'
const SingUp = () => import('./views/SingUp.vue')
const Chat = () => import('./views/Chat.vue')

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
        {
            path: "/",
            component: SingIn
        },
        {
            path: '/singup',
            component: SingUp
        },
        {
            path: '/chat',
            component: Chat
        }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
  }
})

export default router;