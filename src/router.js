import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/o-nas',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue')
    },
    {
      path: '/harmonogram',
      name: 'timetable',
      component: () => import(/* webpackChunkName: "timetable" */ './views/Timetable.vue')
    },
    {
      path: '/partnerzy',
      name: 'partners',
      component: () => import(/* webpackChunkName: "partners" */ './views/Partners.vue')
    },
    {
      path: '/poprzednie-edycje',
      name: 'previousEditions',
      component: () => import(/* webpackChunkName: "previousEditions" */ './views/PreviousEditions.vue')
    },
    {
      path: '/prelegenci',
      name: 'speakers',
      component: () => import(/* webpackChunkName: "speakers" */ './views/Speakers.vue')
    }
  ]
})
