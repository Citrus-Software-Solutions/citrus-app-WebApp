<template>
  <Layout :breadCrumbLinks="breadCrumbLinks">
    <template v-slot:content v-if="offer.title">
      <h1 class="title">Modificar Oferta</h1>
      <JobsForm
        @submitHandler="handleSubmit"
        :errors="jobFormErrors"
        :user="userInfo"
        btn="Modificar Oferta"
        :formData="offer"
      />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JobsForm from '../components/jobs-form/JobsForm.vue'
import Layout from '../components/layout/Layout.vue'
import { breadCrumbTypes } from '../types/index'
import { ModifyOfferService } from '@/job/application/services/ModifyOfferService'
import { ModifyOfferController } from '@/job/infrastructure/controllers/ModifyOfferController'
import { ModifyOfferAdapter } from '@/job/infrastructure/driven-adapters/out/ModifyOfferAdapter'
import { CreateOfferErrorsAdapter } from '@/job/infrastructure/driven-adapters/out/CreateOfferErrorsAdapter'
import { ModifyOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/ModifyOfferStatusAdapter'
import { JobOffer } from '@/job/domain/JobOffer'

import { ConsultOfferController } from '../../job/infrastructure/controllers/ConsultOfferController'
import { ConsultOfferService } from '../../job/application/services/ConsultOfferService'
import { ConsultOfferAdapter } from '../../job/infrastructure/driven-adapters/in/ConsultOfferAdapter'
import { ConsultOfferStateAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStateAdapter'
import { ConsultOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStatusAdapter'
import { ModifyOfferDTO } from '@/job/domain/DTO/ModifyOfferDTO'

interface AddJobStateTypes {
  breadCrumbLinks: breadCrumbTypes[]
}

export default defineComponent({
  data(): AddJobStateTypes {
    return {
      breadCrumbLinks: [
        { label: 'Ofertas', to: '/jobs' },
        {
          label: 'Modificar Oferta',
          to: '/jobs/modify/' + this.$route.params.id,
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      const getOfferController = new ConsultOfferController(
        new ConsultOfferService(
          new ConsultOfferAdapter(),
          new ConsultOfferStateAdapter(),
          new ConsultOfferStatusAdapter()
        )
      )
      getOfferController.executeImpl(this.$route.params.id as string)
    })
    this.resetErrors()
  },
  methods: {
    handleSubmit(jobOfferFields: ModifyOfferDTO) {
      this.resetErrors()
      const modifyOfferErrorsAdapter = new CreateOfferErrorsAdapter() //FIXME: generalizar nombre o crear adaptador propio
      const modifyOfferAdapter = new ModifyOfferAdapter()
      const modifyStatusAdapter = new ModifyOfferStatusAdapter()
      const modifyOfferService = new ModifyOfferService(
        modifyOfferAdapter,
        modifyOfferErrorsAdapter,
        modifyStatusAdapter
      )
      const createOfferController = new ModifyOfferController(
        modifyOfferService
      )
      createOfferController.executeImpl({
        ...jobOfferFields,
        id: this.$route.params.id,
      })
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
    offer(): ModifyOfferDTO {
      return this.$store.getters.getJobOffer
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
