<template>
  <img src="../../../assets/citrus-logo.jpg" alt="" class="jobs-card_img" />
  <div class="jobs-card_content">
    <h1 class="jobs-card_content_title">{{ employeeName }}</h1>
    <p class="jobs-card_content_description">{{ employeeLastName }}</p>
    <!-- <li v-for=""> -->
    <!-- </li> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: String,
    questions: [],
    scores: [],
    totalScore: [],
    employeeName: String,
    employeeLastname: String,
    employerName: String,
    jobTitle: String,
  },
})
</script>

<style
  lang="scss"
  src="@/common-infrastructure/components/jobs-card/JobsCard.module.scss"
  scoped
></style>
