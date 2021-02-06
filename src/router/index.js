import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import clasifica from '../views/clasifica.vue'
import registro from '../views/registro.vue'
import creartarea from '../views/creartarea.vue'
import chatBox from '../views/chatBox.vue'
import matriz from '../views/matriz.vue'
import primercuadrante from '../views/primercuadrante.vue'
import segundocuadrante from '../views/segundocuadrante.vue'
import tercercuadrante from '../views/tercercuadrante.vue'
import cuartocuadrante from '../views/cuartocuadrante.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registro',
    name: 'registro',
    component: registro
  },
  {
    path: '/chatbox',
    name: 'chatbox',
    component: chatBox
  },
  {
    path: '/creartarea',
    name: 'creartarea',
    component: creartarea
  },
  {
    path: '/clasifica',
    name: 'clasifica',
    component: clasifica
  },
  {
    path: '/matriz',
    name: 'matriz',
    component: matriz
  },

  {
    path: '/primercuadrante',
    name: 'primercuadrante',
    component: primercuadrante
  },
  {
    path: '/segundocuadrante',
    name: 'segundocuadrante',
    component: segundocuadrante
  },
  {
    path: '/tercercuadrante',
    name: 'tercercuadrante',
    component: tercercuadrante
  },
  {
    path: '/cuartocuadrante',
    name: 'cuartocuadrante',
    component: cuartocuadrante
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
