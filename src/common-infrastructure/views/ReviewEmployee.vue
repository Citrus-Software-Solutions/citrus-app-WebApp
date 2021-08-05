<template>
  <h1>hola</h1>
  <main class="jobs-form">
    <form @submit.prevent="handleSubmit" class="jobs-form_form">
      <div class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Pregunta 1:</h2>
        <!-- <InputText
          type="text"
          v-model="question"
          name="title"
          required
          placeholder="Pregunta 1"
        /> -->
        <!-- <Reviewbox :grade="2" v-model="scores" required /> -->
        <!-- <InlineMessage v-if="errors?.title">
          {{ errors.title }}
        </InlineMessage> -->
        <Button
          type="submit"
          :label="btn"
          icon="pi pi-plus"
          class="jobs-form_form_btn"
        />
      </div>
    </form>
  </main>
</template>

<script lan="ts">
import { defineComponent } from 'vue'
// import ReviewBox from '@/common-infrastructure/components/review/ReviewBox.vue'
import StarRating from 'vue-star-rating'
import { InputText, Button } from 'primevue/inputtext'

export default defineComponent({
  data() {
    return {
      question: '',
      scores: [],
      rating: 0,
    }
  },
  props: ['application', 'employee', 'btn'],
  emits: ['submitHandler'],
  Component: {
    // ReviewBox,
    StarRating,
    InputText,
    Button,
  },
  methods: {
    handleSubmit() {
      const review = {
        questions: this.questions,
        scores: this.scores,
        totalScore: this.scores.reduce((a, b) => a + b, 0),
        employee: this.employee,
      }
      this.$emit('submitHandler', review)
    },
    setRating(rating) {
      this.rating = rating
    },
  },
})
</script>

<style
  lang="scss"
  src="@/common-infrastructure/components/jobs-form/JobsForm.module.scss"
  scoped
></style>
