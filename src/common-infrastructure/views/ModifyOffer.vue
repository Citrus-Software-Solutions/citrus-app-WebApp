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
import { ModifyOfferFactory } from '@/job/infrastructure/factories/ModifyOfferFactory'
import { ConsultOfferFactory } from '@/job/infrastructure/factories/ConsultOfferFactory'
import { ModifyOfferDTO } from '@/job/domain/DTO/ModifyOfferDTO'

interface AddJobStateTypes {
  breadCrumbLinks: breadCrumbTypes[]
}

export default defineComponent({
  data(): AddJobStateTypes {
    return {
      breadCrumbLinks: [
        { label: 'Ofertas', to: '/app/jobs' },
        {
          label: 'Modificar Oferta',
          to: '/app/jobs/modify/' + this.$route.params.id,
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      const consultOfferFactory = new ConsultOfferFactory()
      consultOfferFactory.create(this.$route.params.id)
    })
    this.resetErrors()
  },
  methods: {
    handleSubmit(jobOfferFields: ModifyOfferDTO) {
      this.resetErrors()
      const modifyOfferFactory = new ModifyOfferFactory()
      modifyOfferFactory.create(jobOfferFields)
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
