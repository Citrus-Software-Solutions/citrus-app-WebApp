import { JobOffer } from '@/job-offer/domain/model/JobOffer'

export interface PostOfferPort {
  postOfferApi(joboffer: JobOffer): void
}
