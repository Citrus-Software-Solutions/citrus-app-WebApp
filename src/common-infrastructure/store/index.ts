import { createStore } from 'vuex'
import { jobOffers } from '../mocks/data'

export const store = createStore({
  state() {
    return {
      jobOffers: jobOffers,
    }
  },
  mutations: {
    // TODO: set proper type
    setJobOffers(state: any, payload) {
      state.jobOffers = payload
    },
  },
  getters: {
    getJobOffers(state) {
      return state.jobOffers
    },
  },
})
