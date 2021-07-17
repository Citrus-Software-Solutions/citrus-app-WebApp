<template>
  <Layout :breadCrumbLinks="breadCrumbLinks">
    <button @click="toggle">CLICKME</button>
    <template v-slot:content>
      <Message v-if="operationStatus.message" :severity="operationStatus.type">
        {{ operationStatus.message }}
      </Message>
      <h1 class="title">Agregar una nueva oferta</h1>
      <JobsForm
        @postJob="handleSubmit"
        :errors="jobFormErrors"
        :user="userInfo"
      />
    </template>
  </Layout>
</template>

<script lang="ts">
import Message from 'primevue/message'
import { defineComponent } from 'vue'
import JobsForm from '../components/jobs-form/JobsForm.vue'
import Layout from '../components/layout/Layout.vue'
import { breadCrumbTypes } from '../types/index'
import { CreateOfferService } from '@/job/application/services/CreateOfferService'
import { CreateOfferController } from '@/job/infrastructure/controllers/CreateOfferController'
import { PostOfferAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferAdapter'
import { CreateOfferErrorsAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferErrorsAdapter'
import { JobOffer } from '@/job/domain/JobOffer'
import { IdGeneratorService } from '@/job/application/services/IdGeneratorService'
import { UuidGenerator } from '@/job/infrastructure/driven-adapters/in/UuidGenerator'
import { CreateOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferStatusAdapter'

interface AddJobStateTypes {
  breadCrumbLinks: breadCrumbTypes[]
  show: boolean
}

export default defineComponent({
  data(): AddJobStateTypes {
    return {
      breadCrumbLinks: [
        { label: 'Ofertas', to: '/jobs' },
        { label: 'Nueva Oferta', to: '/jobs/add' },
      ],
      show: false,
    }
  },
  mounted() {
    this.resetErrors()
  },
  methods: {
    handleSubmit(jobOfferFields: JobOffer) {
      this.resetErrors()
      const idGenerator = new IdGeneratorService(new UuidGenerator())
      const id = idGenerator.createId()
      const createOfferErrorsAdapter = new CreateOfferErrorsAdapter()
      const postOfferAdapter = new PostOfferAdapter()
      const updateStatusAdapter = new CreateOfferStatusAdapter()
      const postOfferService = new CreateOfferService(
        postOfferAdapter,
        createOfferErrorsAdapter,
        updateStatusAdapter
      )
      const createOfferController = new CreateOfferController(postOfferService)
      createOfferController.executeImpl({ ...jobOfferFields, id: id })
    },
    resetErrors() {
      this.$store.commit('resetErrors')
    },
    toggle() {
      this.show = !this.show
    },
  },
  computed: {
    jobFormErrors(): any {
      return this.$store.getters.getErrors.addJobForm
    },
    operationStatus(): { message: string; type: string } {
      return this.$store.getters.getOperationStatus
    },
    userInfo(): { name: string; id: string } {
      return this.$store.getters.getUser
    },
  },
  components: {
    Layout,
    JobsForm,
    Message,
  },
})
</script>

<style scoped>
.title {
  font-size: 2.4rem;
  text-align: center;
}
</style>
