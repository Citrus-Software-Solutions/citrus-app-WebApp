<template>
  <ul>
    <li class="jobs-list" v-for="(review, index) in reviewsData" :key="index">
      <ReviewsCard
        :id="review.id"
        :questions="review.questions"
        :scores="review.scores"
        :totalScore="review.totalScore"
        :employeeName="review.employee.first_name"
        :employeeLastName="review.employee.last_name"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReviewsCard from '@/common-infrastructure/components/review/reviews-card/ReviewsCard.vue'

export default defineComponent({
  computed: {
    reviewsData(): any {
      var reviews = this.$store.getters.getAllReviews
      console.log(reviews)
      // const reviewByApplication = reviews.filter(
      //   (review: { application: { id: number } }) => {
      //     return review.application.id === 1
      //   }
      // )
      // return reviewByApplication
      return reviews
    },
    userinfo(): any {
      return this.$store.getters.getUser
    },
    status(): any {
      return this.$store.getters.getOperationStatus
    },
    filter(): any {
      return this.$store.getters.getFilterOption
    },
  },
  props: {
    jobId: Number,
  },
  components: {
    ReviewsCard,
  },
})
</script>

<style
  lang="scss"
  src="@/common-infrastructure/components/jobs-list/JobsList.module.scss"
  scoped
></style>
