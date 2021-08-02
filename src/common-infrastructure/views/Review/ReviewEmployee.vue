<template>
  <main class="jobs-form">
    <form @submit.prevent="handleSubmit" class="jobs-form_form">
      <div v-for="n in 5" :key="n" class="jobs-form_form_section">
        <h2 class="jobs-form_form_section_title">Pregunta {{ n }}:</h2>
        <InputText
          type="text"
          v-model="questions"
          name="title"
          required
          placeholder="Pregunta $key"
        />
        <RatingBox :grade="2" v-model="scores" required />
        <InlineMessage v-if="errors?.title">
          {{ errors.title }}
        </InlineMessage>
      </div>
      <Button
        type="submit"
        :label="btn"
        icon="pi pi-plus"
        class="jobs-form_form_btn"
      />
    </form>
  </main>
</template>

<script lan="ts">
import { defineComponent } from 'vue'
import RatingBox from '@/common-infrastructure/components/review/RatingBox.vue'
import { CreateReviewDTOUi } from '../../../job/domain/DTO/Review/CreateReviewUI'

export default defineComponent({
  data() {
    return {
      questions: [],
      score: [] as any,
    }
  },
  props: ['application', 'employee'],
  emits: ['submitHandler'],
  components: {
    RatingBox,
  },
  methods: {
    handleSubmit(): void {
      const review: CreateReviewDTOUi = {
        questions: this.questions,
        score: this.score,
        totalScore: this.scores.reduce((a:number, b:number) => a + b, 0),
        employee: this.employee,
      }
      this.$emit('submitHandler', review)
    },
  },
})
</script>

<style lang="scss" src="./JobsList.module.scss" scoped></style>
