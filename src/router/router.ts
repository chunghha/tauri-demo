import { createRouter, createWebHistory } from 'vue-router'
import AboutVue from '../pages/About.vue'
import CountryVue from '../pages/Country.vue'
import HomeVue from '../pages/Home.vue'

const history = createWebHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: HomeVue,
    },
    {
      path: '/about',
      component: AboutVue,
    },
    {
      path: '/country',
      component: CountryVue,
    },
  ],
})
