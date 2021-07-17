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
import { GetOfferController } from '../../job/infrastructure/controllers/ConsultOfferController'
import { ConsultOfferService } from '../../job/application/services/ConsultOfferService'
import { ConsultOfferAdapter } from '../../job/infrastructure/driven-adapters/in/ConsultOfferAdapter'
import { ConsultOfferStateAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStateAdapter'
import { ConsultOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStatusAdapter'

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
    this.$nextTick(() => {
      const getOfferController = new GetOfferController(
        new ConsultOfferService(
          new ConsultOfferAdapter(),
          new ConsultOfferStateAdapter(),
          new ConsultOfferStatusAdapter()
        )
      )
      getOfferController.executeImpl(this.userInfo.id)
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
