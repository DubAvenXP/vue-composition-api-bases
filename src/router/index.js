import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/search-pokemon',
    name: 'search-pokemon',
    component: () => import(/* webpackChunkName: "search-pokemon" */ '../views/SearchPokemon.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-id',
    component: () => import(/* webpackChunkName: "pokemon-id" */ '../views/Pokemon.vue')
  },
  {
    path: '/todo/',
    name: 'todo',
    component: () => import(/* webpackChunkName: "todo" */ '../views/TodoVuex.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
