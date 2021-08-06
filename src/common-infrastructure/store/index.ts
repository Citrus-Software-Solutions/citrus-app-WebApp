import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      user: {
        name: 'Citrus App',
        uid: 1,
        id: 1, //employer id
      },
      allJobOffers: [],
      jobOffer: {},
      employer: {},
      errors: {
        addJobForm: {},
      },
      operationStatus: {
        message: '',
        type: '',
        key: 0,
      },
      filterOption: 'all',
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
    setEmployer(state: any, payload) {
      console.log(payload)
      state.employer = payload
    },
    setUser(state: any, payload) {
      console.log(payload)
      state.user = payload
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
    getEmployer(state) {
      return state.employer
    },
    getUser(state) {
      return state.user
    },
    getFilterOption(state: any) {
      return state.filterOption
    },
  },
})
