<template>
  <Layout :breadCrumbLinks="breadCrumbLinks">
    <template v-slot:callToAction>
      <router-link class="" to="/jobs/add">
        <Button label="Crear Oferta" icon="pi pi-plus" />
      </router-link>
    </template>
    <template v-slot:content>
      <h1 class="title">Consulta de ofertas</h1>
      <JobsList
        @deleteOffer="deleteOfferHandler"
        @duplicateOffer="duplicateOfferHandler"
        @suspendOffer="suspendOfferHandler"
        @publishOffer="publishOfferHandler"
      />
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
// suspend
import { SuspendOfferService } from '../../job/application/services/SuspendOfferService'
import { SuspendOfferController } from '@/job/infrastructure/controllers/SuspendOfferController'
import { SuspendOfferAdapter } from '../../job/infrastructure/driven-adapters/out/SuspendOfferAdapter'
import { SuspendOfferStatusAdapter } from '../../job/infrastructure/driven-adapters/out/SuspendOfferStatusAdapter'
import { SuspendOfferDTOUi } from '@/job/domain/DTO/SuspendOfferDto'
// Publish
import { PublishOfferService } from '../../job/application/services/PublishOfferService'
import { PublishOfferController } from '@/job/infrastructure/controllers/PublishOfferController'
import { PublishOfferAdapter } from '../../job/infrastructure/driven-adapters/out/PublishOfferAdapter'
import { PublishOfferStatusAdapter } from '../../job/infrastructure/driven-adapters/out/PublishOfferStatusAdapter'
import { PublishOfferDTOUi } from '@/job/domain/DTO/PublishOfferDto'

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
    deleteOfferHandler(offerId: DeleteOfferDTOUi) {
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
    duplicateOfferHandler(offerId: DuplicateOfferDTOUi) {
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
    suspendOfferHandler(offerId: SuspendOfferDTOUi) {
      const suspendOfferStatusAdapter = new SuspendOfferStatusAdapter()
      const consultOfferAdapter = new ConsultOfferAdapter()
      const suspendOfferAdapter = new SuspendOfferAdapter()
      const suspendOfferService = new SuspendOfferService(
        consultOfferAdapter,
        suspendOfferStatusAdapter,
        suspendOfferAdapter
      )
      const suspendOfferController = new SuspendOfferController(
        suspendOfferService
      )
      suspendOfferController.executeImpl(offerId)
    },
    publishOfferHandler(offerId: PublishOfferDTOUi) {
      const publishOfferStatusAdapter = new PublishOfferStatusAdapter()
      const consultOfferAdapter = new ConsultOfferAdapter()
      const publishOfferAdapter = new PublishOfferAdapter()
      const publishOfferService = new PublishOfferService(
        consultOfferAdapter,
        publishOfferStatusAdapter,
        publishOfferAdapter
      )
      const publishOfferController = new PublishOfferController(
        publishOfferService
      )
      publishOfferController.executeImpl(offerId)
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
