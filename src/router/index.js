import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/Login.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/appareillage',
    name: 'appareillage',
    component: () => import('../views/AppareillageView.vue')
  },
  {
    path: '/verrerie-associe',
    name: 'verrerie-associe',
    component: () => import('../views/VannerieView.vue')
  },
  {
    path: '/science-vie',
    name: 'science-vie',
    component: () => import('../views/SciencevieView.vue')
  },
  {
    path: '/science-terre',
    name: 'science-terre',
    component: () => import('../views/ScienceterreView.vue')
  },
  {
    path: '/class-terre',
    name: 'class-terre',
    component: () => import('../views/ClassTerrain.vue')
  },
  {
    path: '/produit-chimique',
    name: 'produit-chimique',
    component: () => import('../views/ProduitChimique.vue')
  },
  {
    path: '/materiel-labo',
    name: 'materiel-labo',
    component: () => import('../views/MaterielLaboView.vue')
  },
  {
    path: '/media',
    name: 'media',
    component: () => import('../views/MediaView.vue')
  },
  {
    path: '/lame-mince',
    name: 'lame-mince',
    component: () => import('../views/LameView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredLogin)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.isAuthenticated) {
      next({ name: 'login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
