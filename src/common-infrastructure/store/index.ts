import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      jobOffers: [],
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
