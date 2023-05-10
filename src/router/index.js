import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfosView from '../views/InfosView.vue'
import PresentationView from '../views/PresentationView.vue'
import ContactsView from '../views/ContactsView.vue'

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
    path: '/Presentation',
    name: 'Présentation',
    component: PresentationView
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: ContactsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router