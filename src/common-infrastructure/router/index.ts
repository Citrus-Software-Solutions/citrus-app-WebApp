import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Jobs from '../views/Jobs.vue'
import AddJob from '../views/AddJob.vue'
import JobDetails from '../views/JobDetails.vue'
import ModifyOffer from '../views/ModifyOffer.vue'
import Landing from '../views/Landing.vue'
import UserProfile from '../views/UserProfile.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/app',
    redirect: '/app/jobs',
  },
  {
    path: '/app/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/app/jobs/add',
    name: 'AddJob',
    component: AddJob,
  },
  {
    path: '/app/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
  },
  {
    path: '/app/jobs/modify/:id',
    name: 'ModifyOffer',
    component: ModifyOffer,
  },
  {
    path: '/app/profile',
    name: 'Profile',
    component: UserProfile,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
