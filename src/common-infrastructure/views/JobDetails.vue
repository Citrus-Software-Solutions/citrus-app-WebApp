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
import { ConsultOfferFactory } from '@/job/infrastructure/factories/ConsultOfferFactory'

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
      const consultOfferFactory = new ConsultOfferFactory()
      consultOfferFactory.create(this.$route.params.id)
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
