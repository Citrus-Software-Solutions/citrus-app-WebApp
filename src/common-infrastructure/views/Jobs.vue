<template>
  <Layout :breadCrumbLinks="breadCrumbLinks" :key="status.time">
    <template v-slot:callToAction>
      <router-link class="" to="/app/jobs/add">
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
import { ConsultAllOffersFactory } from '@/job/infrastructure/factories/ConsultAllOffersFactory'
import { DeleteOfferFactory } from '@/job/infrastructure/factories/DeleteOfferFactory'
import { DuplicateOfferFactory } from '@/job/infrastructure/factories/DuplicateOfferFactory'
import { SuspendOfferFactory } from '@/job/infrastructure/factories/SuspendOfferFactory'
import { PublishOfferFactory } from '@/job/infrastructure/factories/PublishOfferFactory'
import { DeleteOfferDTOUi } from '@/job/domain/DTO/DeleteOfferDto'
import { DuplicateOfferDTOUi } from '@/job/domain/DTO/DuplicateOfferDto'
import { SuspendOfferDTOUi } from '@/job/domain/DTO/SuspendOfferDto'
import { PublishOfferDTOUi } from '@/job/domain/DTO/PublishOfferDto'

interface JobsStateTypes {
  breadCrumbLinks: breadCrumbTypes[]
}
export default defineComponent({
  data(): JobsStateTypes {
    return {
      breadCrumbLinks: [{ label: 'Ofertas', to: '/app/jobs' }],
    }
  },
  mounted() {
    this.$nextTick(() => {
      const data = this.consultOfferHandler()
      console.log(data)
    })
  },
  watch: {
    status(newStatus) {
      if (newStatus.key) {
        this.consultOfferHandler()
      }
    },
  },
  methods: {
    consultOfferHandler() {
      const consultAllOffersFactory = new ConsultAllOffersFactory()
      consultAllOffersFactory.create(this.userInfo.id)
    },
    deleteOfferHandler(offerId: DeleteOfferDTOUi) {
      const deleteOfferFactory = new DeleteOfferFactory()
      deleteOfferFactory.create(offerId)
    },
    duplicateOfferHandler(offerId: DuplicateOfferDTOUi) {
      const duplicateOfferFactory = new DuplicateOfferFactory()
      duplicateOfferFactory.create(offerId)
    },
    suspendOfferHandler(offerId: SuspendOfferDTOUi) {
      const suspendOfferFactory = new SuspendOfferFactory()
      suspendOfferFactory.create(offerId)
    },
    publishOfferHandler(offerId: PublishOfferDTOUi) {
      const publishOfferFactory = new PublishOfferFactory()
      publishOfferFactory.create(offerId)
    },
  },
  computed: {
    userInfo(): any {
      return this.$store.getters.getUser
    },
    status(): any {
      return this.$store.getters.getOperationStatus
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
