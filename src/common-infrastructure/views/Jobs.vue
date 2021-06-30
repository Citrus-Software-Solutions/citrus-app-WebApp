<template>
  <Layout :breadCrumbLinks="breadCrumbLinks">
    <template v-slot:callToAction>
      <router-link class="" to="/jobs/add">
        <Button label="Crear Oferta" icon="pi pi-plus" />
      </router-link>
    </template>
    <template v-slot:content>
      <h1 class="title">Consulta de ofertas</h1>
      <JobsList />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from 'primevue/button'
import Layout from '../components/layout/Layout.vue'
import JobsList from '../components/jobs-list/JobsList.vue'
import { breadCrumbTypes } from '../types/index'
import { GetOfferGUI } from '../../job-offer/infrastructure/driven-adapters/gui/GetOfferGUI'
import { GetOfferService } from '../../job-offer/application/services/GetOfferService'
import { Http } from '../../job-offer/infrastructure/driven-adapters/in/http/GetOfferAdapter'

interface JobsStateTypes {
  breadCrumbLinks: breadCrumbTypes[]
}
export default defineComponent({
  data(): JobsStateTypes {
    return {
      breadCrumbLinks: [{ label: 'Ofertas', to: '/jobs' }],
    }
  },
  mounted() {
    this.$nextTick(async () => {
      const getOfferGUI = new GetOfferGUI(new GetOfferService(new Http()))
      const res = await getOfferGUI.getOffersData('ID')
      this.$store.commit('setJobOffers', res)
    })
  },
  components: {
    Button,
    JobsList,
    Layout,
  },
})
</script>

<style scoped>
.title {
  font-size: 2.4rem;
  text-align: center;
}
</style>
