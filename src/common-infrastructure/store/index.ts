import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      user: {
        name: 'Citrus App',
        id: '101010',
      },
      allJobOffers: [],
      jobOffer: {},
      errors: {
        addJobForm: {},
      },
      operationStatus: {
        message: '',
        type: '',
        key: 0,
      },
      filterOption: 'all',
      allReviews: [],
      review: {},
    }
  },
  mutations: {
    setAllJobOffers(state: any, payload) {
      state.allJobOffers = payload
    },
    setJobOffer(state: any, payload) {
      state.jobOffer = payload
    },
    setAddJobFormError(state: any, payload) {
      state.errors.addJobForm = payload
    },
    setOperationStatus(state: any, payload) {
      state.operationStatus = payload
    },
    resetErrors(state: any) {
      state.operationStatus = {
        message: '',
        type: '',
      }
      state.errors.addJobForm = {}
    },
    setFilterOption(state: any, payload) {
      state.filterOption = payload
    },
    setAllReviews(state: any, payload) {
      state.allReviews = payload
    },
    setReview(state: any, payload) {
      state.review = payload
    },
  },
  getters: {
    getAllJobOffers(state) {
      return state.allJobOffers
    },
    getJobOffer(state) {
      return state.jobOffer
    },
    getErrors(state) {
      return state.errors
    },
    getOperationStatus(state) {
      return state.operationStatus
    },
    getUser(state) {
      return state.user
    },
    getFilterOption(state: any) {
      return state.filterOption
    },
    getAllReviews(state: any) {
      return state.allReviews
    },
  },
})
