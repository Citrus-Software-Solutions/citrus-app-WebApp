import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Jobs from '../views/Jobs.vue'
import AddJob from '../views/AddJob.vue'
import JobDetails from '../views/JobDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/jobs',
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/jobs/add',
    name: 'AddJob',
    component: AddJob,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
