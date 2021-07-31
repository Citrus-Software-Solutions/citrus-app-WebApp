<template>
  <Layout :breadCrumbLinks="breadCrumbLinks">
    <template v-slot:content>
      <JobsDetails :details="job" />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JobsDetails from '../components/jobs-details/JobsDetails.vue'
import Layout from '../components/layout/Layout.vue'
import { breadCrumbTypes } from '../types/index'
import { ConsultOfferController } from '../../job/infrastructure/controllers/ConsultOfferController'
import { ConsultOfferService } from '../../job/application/services/ConsultOfferService'
import { ConsultOfferAdapter } from '../../job/infrastructure/driven-adapters/in/ConsultOfferAdapter'
import { ConsultOfferStateAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStateAdapter'
import { ConsultOfferStatusAdapter } from '@/job/infrastructure/driven-adapters/out/ConsultOfferStatusAdapter'

interface JobDetailsStateTypes {
  breadCrumbLinks: breadCrumbTypes[]
}

export default defineComponent({
  data(): JobDetailsStateTypes {
    return {
      breadCrumbLinks: [{ label: 'Ofertas', to: '/app/jobs' }],
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
      getOfferController.executeImpl(this.$route.params.id)
    })
  },
  computed: {
    job() {
      return this.$store.getters.getJobOffer
    },
  },
  components: {
    Layout,
    JobsDetails,
  },
})
</script>

<style scoped>
.title {
  font-size: 2.4rem;
  text-align: center;
}
</style>
