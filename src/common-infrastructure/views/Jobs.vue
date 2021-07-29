<template>
  <Layout :breadCrumbLinks="breadCrumbLinks">
    <template v-slot:callToAction>
      <router-link class="" to="/jobs/add">
        <Button label="Crear Oferta" icon="pi pi-plus" />
      </router-link>
    </template>
    <template v-slot:content>
      <h1 class="title">Consulta de ofertas</h1>
      <JobsList @removeOffer="deleteOffer" @dupOffer="duplicateOffer" />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from 'primevue/button'
import Layout from '../components/layout/Layout.vue'
import JobsList from '../components/jobs-list/JobsList.vue'
import { breadCrumbTypes } from '../types/index'
import { ConsultAllOffersController } from '../../job/infrastructure/controllers/ConsultAllOffersController'
import { ConsultAllOffersService } from '../../job/application/services/ConsultAllOffersService'
import { ConsultAllOffersAdapter } from '../../job/infrastructure/driven-adapters/in/ConsultAllOffersAdapter'
import { ConsultAllOffersStateAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultAllOffersStateAdapter'
import { ConsultOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStatusAdapter'
import { DeleteOfferController } from '@/job/infrastructure/controllers/DeleteOfferController'
import { DeleteOfferService } from '@/job/application/services/DeleteOfferService'
import { DeleteOfferAdapter } from '@/job/infrastructure/driven-adapters/out/DeleteOfferAdapter'
import { DeleteOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/DeleteOfferStatusAdapter'
import { DeleteOfferStateAdapter } from '@/job/infrastructure/driven-adapters/out/DeleteOfferStateAdapter'
import { DeleteOfferDTOUi } from '@/job/domain/DTO/DeleteOfferDto'
import { DuplicateOfferDTOUi } from '@/job/domain/DTO/DuplicateOfferDto'
//fix this
import { DuplicateOfferService } from '../../job/application/services/DuplicateOfferService'
import { DuplicateOfferController } from '@/job/infrastructure/controllers/DuplicateOfferController'
import { ConsultOfferAdapter } from '../../job/infrastructure/driven-adapters/in/ConsultOfferAdapter'
import { CreateOfferAdapter } from '../../job/infrastructure/driven-adapters/out/CreateOfferAdapter'
import { DuplicateOfferStatusAdapter } from '../../job/infrastructure/driven-adapters/out/DuplicateOfferStatusAdapter'
import { DuplicateOfferAdapter } from '@/job/infrastructure/driven-adapters/out/DuplicateOfferAdapter'

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
      const getOfferController = new ConsultAllOffersController(
        new ConsultAllOffersService(
          new ConsultAllOffersAdapter(),
          new ConsultAllOffersStateAdapter(),
          new ConsultOfferStatusAdapter()
        )
      )
      getOfferController.executeImpl(this.userInfo.id)
    })
  },
  methods: {
    deleteOffer(offerId: DeleteOfferDTOUi) {
      const deleteOfferStatusAdapter = new DeleteOfferStatusAdapter()
      const deleteOfferAdapter = new DeleteOfferAdapter()
      const deleteOfferStateAdapter = new DeleteOfferStateAdapter()
      const deleteOfferService = new DeleteOfferService(
        deleteOfferAdapter,
        deleteOfferStatusAdapter,
        deleteOfferStateAdapter
      )
      const deleteOfferController = new DeleteOfferController(
        deleteOfferService
      )
      deleteOfferController.executeImpl(offerId)
    },
    duplicateOffer(offerId: DuplicateOfferDTOUi) {
      const duplicateOfferStatusAdapter = new DuplicateOfferStatusAdapter()
      const consultOfferAdapter = new ConsultOfferAdapter()
      const duplicateOfferAdapter = new DuplicateOfferAdapter()
      const duplicateOfferService = new DuplicateOfferService(
        consultOfferAdapter,
        duplicateOfferStatusAdapter,
        duplicateOfferAdapter
      )
      const duplicateOfferController = new DuplicateOfferController(
        duplicateOfferService
      )
      duplicateOfferController.executeImpl(offerId)
    },
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
