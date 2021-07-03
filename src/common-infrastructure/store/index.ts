import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      user: {
        name: 'Citrus App',
        id: '101010',
      },
      jobOffers: [],
      errors: {
        addJobForm: {},
      },
      operationStatus: {
        message: '',
        type: '',
      },
    }
  },
  mutations: {
    // TODO: set proper type
    setJobOffers(state: any, payload) {
      state.jobOffers = payload
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
  },
  getters: {
    getJobOffers(state) {
      return state.jobOffers
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
  },
})
