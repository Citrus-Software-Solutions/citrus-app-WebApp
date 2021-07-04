<template>
  <ul class="jobs-list">
    <li v-for="(job, index) in jobOffers" :key="index">
      <JobsCard
        :name="job.name"
        :description="job.description"
        :applicants="job.applicants"
        :status="job.status"
        :id="job.id"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JobsCard from '../jobs-card/JobsCard.vue'

export default defineComponent({
  computed: {
    jobOffers() {
      return this.$store.getters.getJobOffers
    },
  },
  components: {
    JobsCard,
  },
})
</script>

<style lang="scss" src="./JobsList.module.scss" scoped></style>
