<template>
  <Layout :breadCrumbLinks="breadCrumbLinks">
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
import { PostOfferService } from '@/job-offer/application/services/PostOfferService'
import { AddJobController } from '@/job-offer/infrastructure/driven-adapters/controller/AddJobController'
import { PostOfferAdapter } from '@/job-offer/infrastructure/driven-adapters/out/http/PostOfferAdapter'
import { PostOfferValidationExceptionsAdapter } from '@/job-offer/infrastructure/driven-adapters/out/validation-exceptions/PostOfferValidationExceptionsAdapter'
import { OperationStatusNotificationAdapter } from '@/job-offer/infrastructure/driven-adapters/out/operation-status/OperationStatusNotificationAdapter'
import { JobOffer } from '@/job-offer/domain/model/JobOffer'
import { IdGeneratorService } from '@/job-offer/application/services/IdGeneratorService'
import { UuidGenerator } from '@/job-offer/infrastructure/driven-adapters/in/UuidGenerator'

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
    handleSubmit(jobOfferFields: JobOffer) {
      this.resetErrors()
      const idGenerator = new IdGeneratorService(new UuidGenerator())
      const id = idGenerator.createId()
      const opStatusNotifAdapter = new OperationStatusNotificationAdapter()
      const postOfferExcepAdapter = new PostOfferValidationExceptionsAdapter()
      const postOfferAdapter = new PostOfferAdapter(opStatusNotifAdapter)
      const postOfferService = new PostOfferService(
        postOfferAdapter,
        postOfferExcepAdapter
      )
      const addJobController = new AddJobController(postOfferService)
      addJobController.SubmitJobOffer({ ...jobOfferFields, id: id })
    },
    resetErrors() {
      this.$store.commit('resetErrors')
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
