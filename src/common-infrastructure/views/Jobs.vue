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
import { GetOfferController } from '../../job-offer/infrastructure/driven-adapters/controller/GetOfferController'
import { GetOfferService } from '../../job-offer/application/services/GetOfferService'
import { GetOfferAdapter } from '../../job-offer/infrastructure/driven-adapters/in/http/GetOfferAdapter'

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
      const getOfferController = new GetOfferController(
        new GetOfferService(new GetOfferAdapter())
      )
      const res = await getOfferController.getOffersData(this.userInfo.id)
      this.$store.commit('setJobOffers', res)
    })
  },
  computed: {
    userInfo(): any {
      return this.$store.getters.getUser
    },
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
