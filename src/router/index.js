import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayananView from '../views/LayananView.vue'
import KontakView from '../views/KontakView.vue'
import ProdukView from '../views/ProdukView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/layanan/:id',
    name: 'LayananView',
    component: LayananView
  },
  {
    path: '/kontak',
    name: 'KontakView',
    component: KontakView
  },
  {
    path: '/produk/:id',
    name: 'ProdukView',
    component: ProdukView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
  // ...
})

export default router
