<template>
  <button class="jobs-list_btn" @click.prevent="toggle" label="Toggle">
    <i type="button" class="pi pi-filter jobs-list_icon" />
    Filtrar <span class="jobs-list_filter--selected">({{ filterValue }})</span>
    <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" />
  </button>
  <ul class="jobs-list">
    <li v-for="(review, index) in reviewsData" :key="index">
      <ReviewsCard
        :id="review.id"
        :questions="review.questions"
        :scores="review.scores"
        :totalScore="review.totalScore"
        :employeeName="review.employee.first_name"
        :employeeLastName="revie.employee.last_name"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Menu from 'primevue/menu'
import { ref } from 'vue'
import { useStore } from 'vuex'
// import { ConsultAllReviewsFactory } from '@/job/infrastructure/factories/review/ConsultAllReviewsFactory'

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
  // mounted() {
  //   this.$nextTick(() => {
  //     this.consultAllReviewsHandler()
  //   })
  // },
  // methods: {
  //   consultAllReviewsHandler() {
  //     const consultAllReviewsFactory = new ConsultAllReviewsFactory()
  //     consultAllReviewsFactory.create(this.userinfo.id)
  //   },
  // },
  // watch: {
  //   status(newStatus) {
  //     if (newStatus.key) {
  //       this.consultAllReviewsHandler()
  //     }
  //   },
  // },
  setup(props, context) {
    const store = useStore()
    const filterValue = ref('Todo')
    const menu = ref()
    const items = ref([
      {
        label: 'Ver Todo',
        command: () => {
          store.commit('setFilterOption', 'all')
          filterValue.value = 'Todo'
        },
      },
      {
        label: 'Ver ofertas',
        command: () => {
          store.commit('setFilterOption', 'offers')
          filterValue.value = 'Ofertas'
        },
      },
      {
        label: 'Ver Trabajos',
        command: () => {
          store.commit('setFilterOption', 'jobs')
          filterValue.value = 'Trabajos'
        },
      },
    ])

    const toggle = (event: any) => {
      menu.value.toggle(event)
    }

    return { items, menu, toggle, filterValue }
  },
  components: {
    Menu,
  },
})
</script>

<style
  lang="scss"
  src="@/common-infrastructure/components/jobs-list/JobsList.module.scss"
  scoped
></style>
