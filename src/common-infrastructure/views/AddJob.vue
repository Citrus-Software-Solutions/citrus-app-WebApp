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
import { CreateOfferFactory } from '@/job/infrastructure/factories/CreateOfferFactory'
import { CreateOfferDTOUi } from '@/job/domain/DTO/CreateOfferDto'

interface AddJobStateTypes {
  breadCrumbLinks: breadCrumbTypes[]
}

export default defineComponent({
  data(): AddJobStateTypes {
    return {
      breadCrumbLinks: [
        { label: 'Ofertas', to: '/app/jobs' },
        { label: 'Nueva Oferta', to: '/app/jobs/add' },
      ],
    }
  },
  mounted() {
    this.resetErrors()
  },
  methods: {
    handleSubmit(jobOfferFields: CreateOfferDTOUi) {
      this.resetErrors()
      const createOfferFactory = new CreateOfferFactory()
      createOfferFactory.create(jobOfferFields)
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
