import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfosView from '../views/InfosView.vue'
import RejoignezNousView from '../views/RejoignezNousView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView /* c'est le nom du fichier, ce n'est pas un composant*/
  },
 
  {
    path: '/Infos',
    name: 'Infos Pratiques',
    component: InfosView
  },
  {
    path: '/RejoignezNous',
    name: 'Rejoignez-nous',
    component: RejoignezNousView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router