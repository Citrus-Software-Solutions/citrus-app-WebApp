<template>
  <Layout :breadCrumbLinks="breadCrumbLinks" :key="status.time">
    <template v-slot:callToAction>
      <router-link class="" to="/app/reviews/add">
        <Button label="Crear Review" icon="pi pi-plus" />
      </router-link>
    </template>
    <template v-slot:content>
      <h1 class="title">Consulta de reviews</h1>
      <ReviewsList />
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from 'primevue/button'
import Layout from '@/common-infrastructure/components/layout/Layout.vue'
import { breadCrumbTypes } from '../../types/index'
import ReviewsList from '@/common-infrastructure/components/review/reviews-list/ReviewsList.vue'
import { ConsultAllReviewsFactory } from '@/job/infrastructure/factories/review/ConsultAllReviewsFactory'

interface JobsStateTypes {
  breadCrumbLinks: breadCrumbTypes[]
}
export default defineComponent({
  data(): JobsStateTypes {
    return {
      breadCrumbLinks: [
        { label: 'Ofertas', to: '/app/jobs' },
        { label: 'Reviews', to: '/app/reviews' },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      const data = this.consultReviewsHandler()
      console.log(data)
    })
  },
  watch: {
    status(newStatus) {
      if (newStatus.key) {
        this.consultReviewsHandler()
      }
    },
  },
  methods: {
    consultReviewsHandler() {
      const consultAllReviewsFactory = new ConsultAllReviewsFactory()
      consultAllReviewsFactory.create(this.userInfo.id)
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
    ReviewsList,
    Button,
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
