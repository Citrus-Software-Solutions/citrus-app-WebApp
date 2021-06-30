<template>
  <main class="jobs-details">
    <h1 class="jobs-details_title">{{ job.name }}</h1>
    <div class="jobs-details_section">
      <i class="pi pi-calendar jobs-details_section_icon"></i>
      <p class="jobs-details_section_sub-title">Duración:</p>
      <p>{{ job.date_begin }}</p>
      <p class="jobs-details_section_divider">-</p>
      <p>{{ job.date_end }}</p>
    </div>
    <div class="jobs-details_section">
      <i class="pi pi-users jobs-details_section_icon"></i>
      <p class="jobs-details_section_sub-title">Vacantes:</p>
      <p>{{ job.available_vacans }}</p>
      <p class="jobs-details_section_sub-title">Género:</p>
      <p>{{ job.gender }}</p>
      <p class="jobs-details_section_sub-title">Rango de edad:</p>
      <p>{{ job.min_age }}</p>
      <p class="jobs-details_section_divider">-</p>
      <p>{{ job.max_age }}</p>
      <p>años</p>
    </div>
    <div class="jobs-details_section">
      <i class="pi pi-money-bill jobs-details_section_icon"></i>
      <p class="jobs-details_section_sub-title">Salario:</p>
      <p>{{ job.salary }}</p>
    </div>
    <p>{{ job.description }}</p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteParams } from 'vue-router'

export default defineComponent({
  data(): RouteParams {
    return {
      jobId: this.$route.params.id,
    }
  },
  computed: {
    // TODO: add type
    job() {
      return this.$store.getters.getJobOffers.filter(
        (job: any) => job.id === this.jobId
      )[0]
    },
  },
})
</script>
<style lang="scss" src="./JobsDetails.module.scss" scoped></style>
