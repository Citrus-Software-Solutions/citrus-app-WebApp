import { JobOffer } from '@/job-offer/domain/JobOffer'

export interface PostOfferPort {
  postOfferApi(joboffer: JobOffer): void
}
