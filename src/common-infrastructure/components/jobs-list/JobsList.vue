<template>
  <button class="jobs-list_btn" @click.prevent="toggle" label="Toggle">
    <i type="button" class="pi pi-filter jobs-list_icon" />
    Filtrar
    <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
  </button>
  <ul class="jobs-list">
    <li v-for="(job, index) in jobsData" :key="index">
      <JobsCard
        :title="job.title"
        :specialRequirements="job.specialRequirements"
        :applicants="job.applicants"
        :status="job.status"
        :id="job.id"
        v-bind="$attrs"
      />
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'
import JobsCard from '../jobs-card/JobsCard.vue'
import Menu from 'primevue/menu'
import { ref } from 'vue'

export default defineComponent({
  computed: {
    jobsData() {
      const jobs = this.$store.getters.getAllJobOffers
      switch (this.filter) {
        case 'offers':
          return jobs.filter((job) => job.status === 0)
        case 'jobs':
          return jobs.filter((job) => job.status !== 0)
        default:
          return jobs
      }
    },
  },
  setup(props, context) {
    const filter = ref('all')
    const menu = ref()
    const items = ref([
      {
        label: 'Todo',
        command: () => {
          filter.value = 'all'
        },
      },
      {
        label: 'Ver ofertas',
        command: () => {
          filter.value = 'offers'
        },
      },
      {
        label: 'Ver Trabajos',
        command: () => {
          filter.value = 'jobs'
        },
      },
    ])

    const toggle = (event) => {
      menu.value.toggle(event)
    }

    return { items, menu, toggle, filter }
  },
  components: {
    JobsCard,
    Menu,
  },
})
</script>

<style lang="scss" src="./JobsList.module.scss" scoped></style>
