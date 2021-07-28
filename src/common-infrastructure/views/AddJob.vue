<template>
  <Layout :breadCrumbLinks="breadCrumbLinks">
    <template v-slot:content>
      <h1 class="title">Agregar una nueva oferta</h1>
      <JobsForm
        @submitHandler="handleSubmit"
        :errors="jobFormErrors"
        :user="userInfo"
        btn="Agregar Oferta"
      />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JobsForm from '../components/jobs-form/JobsForm.vue'
import Layout from '../components/layout/Layout.vue'
import { breadCrumbTypes } from '../types/index'
import { CreateOfferService } from '@/job/application/services/CreateOfferService'
import { CreateOfferController } from '@/job/infrastructure/controllers/CreateOfferController'
import { CreateOfferAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferAdapter'
import { CreateOfferErrorsAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferErrorsAdapter'
import { CreateOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferStatusAdapter'
import { CreateOfferDTOUi } from '@/job/domain/DTO/CreateOfferDto'

interface AddJobStateTypes {
  breadCrumbLinks: breadCrumbTypes[]
}

export default defineComponent({
  data(): AddJobStateTypes {
    return {
      breadCrumbLinks: [
        { label: 'Ofertas', to: '/jobs' },
        { label: 'Nueva Oferta', to: '/jobs/add' },
      ],
    }
  },
  mounted() {
    this.resetErrors()
  },
  methods: {
    handleSubmit(jobOfferFields: CreateOfferDTOUi) {
      this.resetErrors()
      const createOfferErrorsAdapter = new CreateOfferErrorsAdapter()
      const postOfferAdapter = new CreateOfferAdapter()
      const updateStatusAdapter = new CreateOfferStatusAdapter()
      const postOfferService = new CreateOfferService(
        postOfferAdapter,
        createOfferErrorsAdapter,
        updateStatusAdapter
      )
      const createOfferController = new CreateOfferController(postOfferService)
      createOfferController.executeImpl(jobOfferFields)
    },
    resetErrors() {
      this.$store.commit('resetErrors')
    },
  },
  computed: {
    jobFormErrors(): any {
      return this.$store.getters.getErrors.addJobForm
    },
    userInfo(): { name: string; id: string } {
      return this.$store.getters.getUser
    },
  },
  components: {
    Layout,
    JobsForm,
  },
})
</script>

<style scoped>
.title {
  font-size: 2.4rem;
  text-align: center;
}
</style>
