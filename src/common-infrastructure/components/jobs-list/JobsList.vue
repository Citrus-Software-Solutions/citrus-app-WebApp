<template>
  <button class="jobs-list_btn" @click.prevent="toggle" label="Toggle">
    <i type="button" class="pi pi-filter jobs-list_icon" />
    Filtrar <span class="jobs-list_filter--selected">({{ filterValue }})</span>
    <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
  </button>
  <ul class="jobs-list">
    <li v-for="(job, index) in jobsData" :key="index">
      <JobsCard
        :title="job.title"
        :special_requirements="job.special_requirements"
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
import { useStore } from 'vuex'
import { ConsultOfferStatusNameFactory } from '@/job/infrastructure/factories/ConsultOfferStatusNameFactory'

export default defineComponent({
  computed: {
    jobsData() {
      const jobs = this.$store.getters.getAllJobOffers
      switch (this.filter) {
        case 'offers':
          return jobs.filter((job) => {
            return this.consultStatus(job.status) === 'Sin Publicar'
          })
        case 'jobs':
          return jobs.filter(
            (job) => this.consultStatus(job.status) !== 'Sin Publicar'
          )
        default:
          return jobs
      }
    },
    filter() {
      return this.$store.getters.getFilterOption
    },
  },
  methods: {
    consultStatus(status) {
      const consultOfferStatusNameFactory = new ConsultOfferStatusNameFactory()
      return consultOfferStatusNameFactory.create(status)
    },
  },
  setup(props, context) {
    const store = useStore()
    const filterValue = ref('Todo')
    const menu = ref()
    const items = ref([
      {
        label: 'Ver Todo',
        command: () => {
          store.commit('setFilterOption', 'all')
          filterValue.value = 'Todo'
        },
      },
      {
        label: 'Ver ofertas',
        command: () => {
          store.commit('setFilterOption', 'offers')
          filterValue.value = 'Ofertas'
        },
      },
      {
        label: 'Ver Trabajos',
        command: () => {
          store.commit('setFilterOption', 'jobs')
          filterValue.value = 'Trabajos'
        },
      },
    ])

    const toggle = (event) => {
      menu.value.toggle(event)
    }

    return { items, menu, toggle, filterValue }
  },
  components: {
    JobsCard,
    Menu,
  },
})
</script>

<style lang="scss" src="./JobsList.module.scss" scoped></style>
