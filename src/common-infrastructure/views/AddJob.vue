<template>
  <Layout :breadCrumbLinks="breadCrumbLinks">
    <template v-slot:content>
      <h1 class="title">Agregar una nueva oferta</h1>
      <JobsForm />
    </template>
  </Layout>
</template>

<script lang="ts">
import { PostOfferService } from '@/job-offer/application/services/PostOfferService'
import { AddJobGUI } from '@/job-offer/infrastructure/driven-adapters/gui/AddJobGUI'
import { PostOfferAdapter } from '@/job-offer/infrastructure/driven-adapters/out/http/PostOfferAdapter'
import { defineComponent } from 'vue'
import JobsForm from '../components/jobs-form/JobsForm.vue'
import Layout from '../components/layout/Layout.vue'
import { breadCrumbTypes } from '../types/index'
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

  methods: {
    handleSubmit() {
      const addJobGui = new AddJobGUI(
        new PostOfferService(new PostOfferAdapter())
      )
      addJobGui.SubmitJobOffer({ id: '2', title: 'Titulo 2' })
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
