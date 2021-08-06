<template>
  <img src="../../../assets/citrus-logo.jpg" alt="" class="jobs-card_img" />
  <div class="jobs-card_content">
    <h1 class="jobs-card_content_title">{{ id }}</h1>
    <p class="jobs-card_content_description">
      <bold>Nombre empleado:</bold> {{ employeeName }} {{ employeeLastName }}
    </p>

    <ul>
      <li v-for="(question, index) in questions" :key="index">
        <h1>Pregunta {{ index + 1 }}:</h1>
        <h3>{{ question.name }}</h3>
        &nbsp;
        <h1>Puntuacion pregunta {{ index + 1 }}:</h1>
        <h3>{{ question.score }}/<bold>5</bold></h3>
        &nbsp;
      </li>
    </ul>
  </div>
  <hr />
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
    employeeLastName: String,
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
