import Vue from 'vue'
import Router from 'vue-router'
import Message from './views/Message.vue'
import Me from './views/Me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/message'
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/image',
      name: 'image',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Image.vue')
    }
  ]
})
